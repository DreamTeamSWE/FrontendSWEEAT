import React from "react";
import "./css/home.css";
import SearchBar from "../searchBar/SearchBar";
import Ranking from "./Ranking";

function Home() {
  return (
    <>
      <SearchBar />
      <Ranking />
    </>
  );
}

export default Home;
