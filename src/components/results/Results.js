import React from "react";
import Cards from "./Cards.js";
import Filters from "./Filters.js";
import "./css/classifica.css";

function Classifica() {
  return (
    <div id="app">
      <div id="classifica">
        <Filters />
        <Cards />
      </div>
    </div>
  );
}

export default Classifica;
