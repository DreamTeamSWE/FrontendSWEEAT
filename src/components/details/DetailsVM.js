import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { autorun, makeAutoObservable } from "mobx";

export default function DettagliLocaleVM(store) {
  const rankingStore = store.rankingStore;

  const loc = useLocation();

  const [place, setPlace] = useState("");
  const [postSocial, setPostSocial] = useState("");

  //When created, fetch
  useEffect(() => {
    rankingStore.fetchPosts(loc.state.id_rist);
  }, []);

  //Observer : if posts change, update
  useEffect(
    () =>
      autorun(() => {
        getTempPost();
      }),
    []
  );

  //get and set posts and place
  function getTempPost() {
    //console.log("getTempPost from PostVM");
    //console.log(loc.state.id_rist);
    setPostSocial(rankingStore.tempPostsList);
    setPlace(rankingStore.getPlaceByIDFromLocal(loc.state.id_rist));
  }

  return makeAutoObservable({
    place,
    postSocial,
  });
}
