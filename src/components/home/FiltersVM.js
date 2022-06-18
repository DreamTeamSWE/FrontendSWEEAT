import { useState, useEffect } from "react";
import { autorun, makeAutoObservable } from "mobx";

export default function FiltersVM(store) {
  const cityStore = store.cityStore;
  const categStore = store.categoryStore;
  const rankingStore = store.rankingStore;

  const [cities, setCities] = useState("");
  const [categories, setCategories] = useState("");

  const [zone, setZone] = useState("");
  const [range, setRange] = useState(10);
  const [category, setCategory] = useState("");
  const [m1, setM1] = useState(1);
  const [m2, setM2] = useState(1);
  const [m3, setM3] = useState(1);

  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetchFilterData();
  }, []);

  useEffect(
    () =>
      autorun(() => {
        getCities();
        getCategories();
      }),
    []
  );

  function fetchFilterData() {
    cityStore.fetchCities();
    categStore.fetchCategories();
  }

  function getCities() {
    setCities(cityStore.citiesList);
  }

  function getCategories() {
    setCategories(categStore.categoryList);
    console.log(categStore.categoryList);
  }

  const zoneHandler = (event) => {
    setZone(event.target.value);
    console.log(event.target.value);
  };

  const rangeHandler = (event) => {
    setRange(event.target.value);
    console.log(event.target.value);
  };

  const categoryHandler = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    rankingStore.filter(0, 10, range, zone, category, m1, m2, m3);

    setIsFiltered(true);
  };

  function removeFilter() {
    rankingStore.fetchPlaces(0, 10);
    setIsFiltered(false);
  }

  return makeAutoObservable({
    cities,
    categories,
    zone,
    zoneHandler,
    range,
    rangeHandler,
    category,
    categoryHandler,
    handleClick,
    isFiltered,
    removeFilter,
  });
}
