import React from "react";
import "./css/home.css";
import SearchBar from "../searchBar/SearchBar";
import HomeCards from "./HomeCards";

function Home() {
  return (
    <>
      <SearchBar />
      <HomeCards />
    </>
  );
}

export default Home;
