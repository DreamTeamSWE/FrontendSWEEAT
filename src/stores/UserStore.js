import User from "./data/User";
import Place from "./data/Place";
import {
  makeObservable,
  observable,
  action,
  runInAction,
  computed,
} from "mobx";

import { Auth } from "aws-amplify";
import config from "../config/config.json";

class UserStore {
  constructor(rootStore) {
    this.user = new User();
    this.favoriteList = [];
    this.rootStore = rootStore;
    makeObservable(this, {
      user: observable,
      favoriteList: observable.shallow,
      rootStore: false,
      reset: action,
      restoreUser: action,
      login: action,
      logout: action,
      refresh: action,
      addFavorite: action,
      deleteFavorite: action,
      fetchFavorites: action,
      status: computed,
    });
    //this.restoreUser();
  }

  get userDetails() {
    //console.log(this.user, "userid");
    return {
      name: this.user.name,
      surname: this.user.surname,
      email: this.user.email,
    };
  }

  get favorites() {
    if (this.favoriteList.length > 0) {
      return this.favoriteList;
    }
    return null;
  }

  get status() {
    return this.user.authenticated;
  }

  reset() {
    this.user = new User();
    this.favoriteList = [];
  }

  /* getUserDataFromLocal() {
    try {
      const user = window.localStorage.getItem("user");
      if (user) {
        const parsed = JSON.parse(user);
        if (parsed.attributes) {
          this.user = new User(
            parsed.attributes.sub,
            parsed.attributes.given_name,
            parsed.attributes.family_name,
            parsed.attributes.email
          );
        }
        return user;
      } else return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  } */

  //This method is used to restore the user if he/she is logged and the data are vacant (after a refresh or if the page is closed)
  async restoreUser() {
    try {
      const u = await Auth.currentAuthenticatedUser();
      if (u) {
        this.user = new User(
          u.attributes.sub,
          u.attributes.given_name,
          u.attributes.family_name,
          u.attributes.email,
          true
        );
        this.fetchFavorites();
        //console.log(this.user.username);
      }
    } catch (error) {
      //console.log(error);
    }
  }

  //This method is used to login and, if successful, to save user data
  async login(username, password) {
    try {
      const user = await Auth.signIn({
        username,
        password,
      });
      if (user) {
        //window.localStorage.setItem("user", JSON.stringify(user));
        //window.localStorage.setItem("auth", JSON.stringify(true));
        this.user = new User(
          user.username,
          user.attributes.given_name,
          user.attributes.family_name,
          user.attributes.email,
          true
        );
        this.fetchFavorites();
        return true;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  //This method is used to logout
  async logout() {
    //window.localStorage.setItem("auth", JSON.stringify(false));
    //window.localStorage.setItem("user", null);
    this.reset();
    await Auth.signOut({ global: true }).catch((err) => {
      Auth.signOut();
    });
  }

  //This method is used for the registration
  async signUp(username, password, given_name, family_name) {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          given_name: given_name,
          family_name: family_name,
        },
      });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  //This method is used to change password if forgotten
  async forgotPW(username) {
    try {
      await Auth.forgotPassword(username);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  //This method is used to verify new password if forgotten the old one
  async forgotPWVerification(username, code, new_password) {
    try {
      await Auth.forgotPasswordSubmit(username, code, new_password);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  //This method is used to change the password (old password is required)
  async changePW(oldPW, newPW) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        await Auth.changePassword(user, oldPW, newPW);
        return true;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  //This method refreshes current session (accessToken and idToken).
  async refresh() {
    try {
      const session = await Auth.currentSession();
      //const user = await Amplify.Auth.currentAuthenticatedUser();
      this.user.authenticated = true;
    } catch (error) {
      /*console.log(error);*/

      //here will try to refresh refreshToken
      this.refreshTokenRefresh();
    }
  }

  //This method refreshes the refreshToken (Do not use directly)
  async refreshTokenRefresh() {
    try {
      const cognitoUser = await Auth.currentAuthenticatedUser();
      const { refreshToken } = cognitoUser.getSignInUserSession();
      cognitoUser.refreshSession(refreshToken, (err, session) => {
        if (err) {
          this.logout();
        }
      });
    } catch (error) {
      /*console.log(error);*/

      this.logout();
    }
  }

  //methods for favoriteList
  //Add a new favorite
  async addFavorite(id_rist) {
    //console.log(this.user.username, "username");
    //console.log(id_rist, "addFavo");
    try {
      const s =
        config.apiFavoriteListUrls.insertFavUrl +
        this.user.username +
        "&&restaurant=" +
        id_rist;
      await fetch(s);
      this.fetchFavorites();
    } catch (error) {
      console.log(error);
    }
  }

  //Delete a favorite
  async deleteFavorite(id_rist) {
    try {
      await fetch(
        config.apiFavoriteListUrls.removeFavUrl +
          this.user.username +
          "&&restaurant=" +
          id_rist
      );
      this.fetchFavorites();
    } catch (error) {
      console.log(error);
    }
    //const json = await response.json;
  }

  //Fetch the user's favorites
  async fetchFavorites() {
    this.favoriteList = [];
    try {
      const response = await fetch(
        config.apiFavoriteListUrls.getFavUrl + this.user.username
      );
      const json = await response.json();
      runInAction(() => {
        json.forEach((locale) => {
          const { id_ristorante, nome_ristorante } = locale;
          this.favoriteList.push(new Place(id_ristorante, nome_ristorante));
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserStore;
