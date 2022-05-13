import { useState, useEffect } from "react";
import { autorun, makeAutoObservable } from "mobx";

export default function HomeCardsVM(store) {
  const rankingStore = store.rankingStore;

  const [topHome, settopHome] = useState("");

  //When is created
  useEffect(() => {
    fetchtopHome(0);
  }, []);

  //Observer : when data is changed, update
  useEffect(
    () =>
      autorun(() => {
        gettopHome();
      }),
    []
  );

  //Fetch page of Places (num = 0)
  function fetchtopHome(num) {
    rankingStore.fetchPlaces(num * 10, 10);
  }

  //Get from rankingStore
  function gettopHome() {
    settopHome(rankingStore.placesList);
  }

  //isLike and his functions are here temporary only for demonstration. After that, they will be removed/replaced.
  const [isLike, setIsLike] = useState("");

  function setDislike(e) {
    e.target.setAttribute("src", require("../../images/heart.png"));
    e.target.setAttribute("alt", "empty heart");
    setIsLike(!isLike);
  }

  function setLike(e) {
    e.target.setAttribute("src", require("../../images/heart-f.png"));
    e.target.setAttribute("alt", "full heart");
    setIsLike(!isLike);
  }

  return makeAutoObservable({
    topHome,
    isLike,
    setLike,
    setDislike,
    fetchtopHome,
  });
}
