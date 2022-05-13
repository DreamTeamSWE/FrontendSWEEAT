import { useState, useEffect } from "react";
import { autorun, makeAutoObservable } from "mobx";
import { useLocation } from "react-router-dom";

export default function FetchVM(store) {
  const rankingStore = store.rankingStore;
  const userStore = store.userStore;
  const loc = useLocation();

  const [places, setPlaces] = useState("");
  const [searched, setSearched] = useState("");
  const [origin, setOrigin] = useState(0);
  const [size, setSize] = useState(4);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    loadPlaces();
  }, []);

  useEffect(
    () =>
      autorun(() => {
        setPlaces(rankingStore.placesList);
        setIsLoading(false);
      }),
    []
  );

  function loadPlaces() {
    if (loc.state) {
      if (loc.state.locale) {
        rankingStore.fetchByName(loc.state.locale);
        setSearched(loc.state.locale);
      } else if (loc.state.origin && loc.state.size) {
        rankingStore.fetchPlaces(loc.state.origin, loc.state.size);
        setOrigin(loc.state.origin);
        setSize(loc.state.size);
      }
    } else {
      rankingStore.fetchPlaces(origin, size);
    }
  }

  function showMorePlaces() {
    rankingStore.fetchPlaces(origin, size + 4);
    setSize(size + 4);
  }
  const addFavoriteClick = async (id_rist) => {
    await userStore.addFavorite(id_rist);
  }
  return makeAutoObservable({
    places,
    searched,
    isLoading,
    showMorePlaces,
    isLike,
    setLike,
    setDislike,
    addFavoriteClick,

  });
}
