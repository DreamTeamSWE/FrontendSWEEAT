import { useState, useEffect } from "react";
import { autorun, makeAutoObservable } from "mobx";
export default function ListaPreferitiViewModel(store) {
  //Model
  const userStore = store.userStore;

  const [lista, setLista] = useState("");

  //Run when rendered the first time
  useEffect(() => {
    userStore.fetchFavorites();
    //userStore.addFavorite(1133);
  }, []);

  //Observe userStore and trigger actions when changes made (Attention : it runs also on rendering)
  useEffect(
    () =>
      autorun(() => {
        getList();
        //console.log(userStore.favoriteList);
      }),
    []
  );

  //get and set favoriteList from the store (model)
  function getList() {
    setLista(userStore.favorites);
  }

  const removeClick = async (id_ristorante) => {
    userStore.deleteFavorite(id_ristorante);
  };

  return makeAutoObservable({
    lista,
    removeClick,
  });
}
