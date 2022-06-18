import { useState, useEffect } from "react";
import { autorun, makeAutoObservable } from "mobx";
import { set } from "react-hook-form";

export default function HomeCardsVM(store) {
  const rankingStore = store.rankingStore;
  const userStore = store.userStore;

  const [isAuth, setIsAuth] = useState(userStore.status);

  const [topHome, settopHome] = useState([]);
  const [fav, setFav] = useState([]);

  const [onView, setOnView] = useState(10);
  const [index, setIndex] = useState(1);
  const [quantity, setQuantity] = useState(50);
  const [pages, setPages] = useState(1);

  const [isLike, setIsLike] = useState([]);

  //When is created
  useEffect(() => {
    fetchtopHome();
    //fetchFav();
  }, []);

  /* useEffect(() => {
    if (topHome && topHome.length > 0) {
      setOnView(topHome.slice(0 + quantity * (index - 1), quantity * index));
    }
  }, [topHome]); */

  //Observer : when data is changed, update
  useEffect(
    () =>
      autorun(() => {
        gettopHome();
      }),
    []
  );

  useEffect(
    () =>
      autorun(() => {
        setIsAuth(userStore.status);
      }),
    []
  );

  useEffect(
    () =>
      autorun(() => {
        getFav();
      }),
    []
  );

  useEffect(() => {
    if (isAuth) {
      prepareLike();
    }
  }, [topHome, fav]);

  //Fetch page of Places (num = 0)
  function fetchtopHome() {
    rankingStore.fetchPlaces(0, quantity);
  }

  //Get from rankingStore
  async function gettopHome() {
    settopHome(
      rankingStore.getPlacesInRange(0 + onView * (index - 1), onView * index)
    );
    const q = rankingStore.numberPlaces;
    setQuantity(q);
    const qR = parseInt(q % onView, 10);
    const qD = parseInt(q / onView, 10);
    if (qR !== 0) {
      setPages(qD + 1);
    } else setPages(qD);
    console.log("Pagine : " + qD);
  }

  async function getFav() {
    setFav(userStore.favorites);
  }

  function prepareLike() {
    if (topHome && fav && topHome.length > 0 && fav.length > 0) {
      const likes = [];
      var found = false;
      topHome.forEach((item) => {
        fav.forEach((item2) => {
          if (item.id === item2.id) {
            likes.push(true);
            found = true;
          }
        });
        if (found) {
          found = false;
        } else {
          likes.push(false);
        }
      });
      //console.log("Likes : " + likes);
      setIsLike(likes);
    } else {
      console.log("Non esistono ancora");
    }
  }

  function heartToggle(e) {
    const pos = e.target.value;
    console.log(pos);
    //const isLikeCopy = [...isLike];
    console.log(isLike);
    //console.log("Copia : " + isLikeCopy);
    if (isLike[pos]) {
      //e.target.setAttribute("src", require("../../images/heart.png"));
      e.target.setAttribute("alt", "empty heart");
      userStore.deleteFavorite(topHome[pos].id);
    } else {
      //e.target.setAttribute("src", require("../../images/heart-f.png"));
      e.target.setAttribute("alt", "full heart");
      userStore.addFavorite(topHome[pos].id);
    }
    //isLikeCopy[pos] = !isLike[pos];
    //setIsLike(isLikeCopy);
  }


  function handlePages(e) {
    //console.log(e.target.value);

    e.target.parentElement.childNodes.forEach((item) => {
      item.classList.remove("active");
    })
    e.target.classList.add("active");
    setIndex(e.target.value);
    settopHome(
      rankingStore.getPlacesInRange(
        0 + onView * (e.target.value - 1),
        onView * e.target.value
      )
    );
  }

  return makeAutoObservable({
    isAuth,
    topHome,
    isLike,
    pages,
    heartToggle,
    handlePages,
  });
}
