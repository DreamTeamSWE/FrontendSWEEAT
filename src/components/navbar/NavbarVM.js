import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { makeAutoObservable, autorun } from "mobx";

export default function NavbarViewModel(store) {
  //Model
  const userStore = store.userStore;

  //react navigator
  const nav = useNavigate();
  const loc = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(userStore.status);

  //When Navbar and NavbarVM is created, check if user was logged
  useEffect(() => {
    userStore.restoreUser();
  }, []);

  //Temporary! Everytime there is a movement betweem pages, refresh the token
  useEffect(() => {
    if (loc.pathname !== "/logout") {
      userStore.refresh();
      //setIsAuth(userStore.status);
    }

    /*console.log("funziona");*/
  }, [loc.pathname]);

  //Observer : if user status change, update
  useEffect(
    () =>
      autorun(() => {
        setIsAuth(userStore.status);
      }),
    []
  );

  //It is possible to observe with reaction (from mobx), as an alternative to autorun (also from mobx), but as tested, there are some strange behaviours.
  /*  useEffect(
    () =>
      reaction(
        () => userStore.status,
        (status) => {
          setIsAuth(status);
        }
      ),
    []
  ); */

  function setClose() {
    setIsOpen(!isOpen);
  }

  function setOpen() {
    setIsOpen(!isOpen);
  }

  async function onLogout() {
    await userStore.logout();
    //setIsAuth(false);
    nav("/");
  }

  return makeAutoObservable({
    isOpen,
    isAuth,
    setClose,
    setOpen,
    onLogout,
  });
}
