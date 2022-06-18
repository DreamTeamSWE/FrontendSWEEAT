import Place from "./data/Place";
import Post from "./data/Post";
import { makeObservable, observable, action, runInAction } from "mobx";

import config from "../config/config.json";

class RankingStore {
  constructor(rootStore) {
    this.places = [];
    this.filteredPlaces = [];
    this.tempPosts = [];
    this.rootStore = rootStore;
    makeObservable(this, {
      places: observable,
      filteredPlaces: observable,
      tempPosts: observable,
      fetchPlaces: action,
      fetchByName: action,
      filter: action,
      fetchPosts: action,
      deletePosts: action,
    });
  }

  get placesList() {
    if (this.places.length > 0) {
      return this.places;
    }
    return null;
  }

  get numberPlaces() {
    return this.places.length;
  }

  get filteredPlacesList() {
    if (this.filteredPlaces.length > 0) {
      return this.filteredPlaces;
    }
    return null;
  }

  get tempPostsList() {
    if (this.tempPosts.length > 0) {
      return this.tempPosts;
    }
    return null;
  }

  //This method fetch and save places. It takes from a certain index in a certain size (Places are already ordinated from best to worst)
  async fetchPlaces(origin, size) {
    const response = await fetch(
      config.apiRanking.getRankUrl + "?from=" + origin + "&size=" + size
    );
    const json = await response.json();
    runInAction(() => {
      // console.log(json);
      this.places.splice(0, this.places.length);
      json.forEach((item) => {
        this.places.push(
          new Place(
            item.id_ristorante,
            item.nome_ristorante,
            item.indirizzo,
            item.telefono,
            item.sito_web,
            item.latitudine,
            item.longitudine,
            item.categoria,
            item.punteggio_emoji,
            item.punteggio_foto,
            item.punteggio_testo,
            item.url_image
          )
        );
      });
    });
    // console.log(json);
  }

  //This method fetch and save places that has a similar name to the one searched
  async fetchByName(name) {
    const searchByName = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //body: JSON.stringify({ "name": accountId })
      body: JSON.stringify({ name: name }),
    };
    const response = await fetch(config.apiRanking.getSearchUrl, searchByName);
    const json = await response.json();
    runInAction(() => {
      this.places.splice(0, this.places.length);
      json.forEach((item) => {
        this.places.push(
          new Place(
            item.id_ristorante,
            item.nome_ristorante,
            item.indirizzo,
            item.telefono,
            item.sito_web,
            item.latitudine,
            item.longitudine,
            item.categoria,
            item.punteggio_emoji,
            item.punteggio_foto,
            item.punteggio_testo,
            item.url_immagine
          )
        );
      });
    });
    //console.log(json);
    //console.log(this.placesList);
  }

  //Filter places
  async filter(origin, size, radius, zone, category, m1, m2, m3) {
    var url;
    if (radius && zone && category) {
      url =
        config.apiFilters.getByFilters +
        "?radius=" +
        radius +
        "&location=" +
        zone +
        "&categoria=" +
        category +
        "&position=" +
        origin +
        "&size=" +
        size;
    } else if (radius && zone) {
      url =
        config.apiFilters.getByFilters +
        "?radius=" +
        radius +
        "&location=" +
        zone +
        "&position=" +
        origin +
        "&size=" +
        size;
    } else if (category) {
      url =
        config.apiFilters.getByFilters +
        "?categoria=" +
        category +
        "&position=" +
        origin +
        "&size=" +
        size;
    }
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    runInAction(() => {
      // console.log(json);
      this.places.splice(0, this.places.length);
      json.forEach((item) => {
        this.places.push(
          new Place(
            item.id_ristorante,
            item.nome_ristorante,
            item.indirizzo,
            item.telefono,
            item.sito_web,
            item.latitudine,
            item.longitudine,
            item.categoria,
            item.punteggio_emoji,
            item.punteggio_foto,
            item.punteggio_testo,
            item.url_image
          )
        );
      });
    });
  }

  //This method fetch and save all the posts of a certain places (It uses the id of the place)
  async fetchPosts(id) {
    const dettagliLocale = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //body: JSON.stringify({ "name": accountId })
      body: JSON.stringify({ id_rist: id }),
    };
    const response = await fetch(config.apiRanking.getPostsUrl, dettagliLocale);
    const json = await response.json();
    try {
      runInAction(() => {
        this.tempPosts.splice(0, this.tempPosts.length);
        json.forEach((item) => {
          this.tempPosts.push(
            new Post(
              item.id_post,
              item.nome_utente,
              item.data_post,
              item.id_ristorante,
              item.testo,
              item.punteggio_emoji,
              item.punteggio_foto,
              item.punteggio_testo,
              item.url_immagine,
              item.nome_label
            )
          );
        });
        /*console.log(json);*/
      });
    } catch (e) {
      //console.log("Errore");
      //console.log(e);
    }
  }

  async deletePosts() {
    this.tempPosts.splice(0, this.tempPosts.length);
  }

  getPlaceByIDFromLocal(id) {
    var i = 0;
    while (i < this.places.length && this.places[i].id !== id) {
      i++;
    }
    if (this.places[i].id === id) {
      return this.places[i];
    } else return null;
  }

  getPlacesInRange(from, to) {
    if (this.places.length > 0) {
      return this.places.slice(from, to);
    } else return null;
  }
}

export default RankingStore;
