import React from "react";
import "./css/home.css";
import HomeCards from "./HomeCards";
import Filters from "./Filters";

function Home() {
  return (
    <>
      <Filters />
      <HomeCards />
    </>
  );
}

export default Home;
