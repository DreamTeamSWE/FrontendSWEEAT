import React from "react";
import UserData from "./UserData/UserData";
import ListaPreferiti from "./ListaPreferiti/ListaPreferiti";
import SuggerisciAccount from "./SuggerisciAccount/SuggerisciAccount";
import "./css/userArea.css";

import AreaPersonaleViewModel from "./UserAreaVM";

function AreaPersonale() {
  const { activeNav, changeNav } = AreaPersonaleViewModel();

  const returActiveNav = () => {
    switch (activeNav) {
      case "ListaPreferiti":
        return <ListaPreferiti />;
      case "SuggerisciAccount":
        return <SuggerisciAccount />;
      default:
        return <UserData />;
    }
  };
  return (
    <div className="areaPersonale">
      <div className="navPersonale">
        <button onClick={() => changeNav("DatiPersonali")}>
          Dati Personali
        </button>
        <button onClick={() => changeNav("ListaPreferiti")}>
          Lista Preferiti
        </button>
        <button onClick={() => changeNav("SuggerisciAccount")}>
          Suggerisci Account
        </button>
      </div>
      {returActiveNav()}
    </div>
  );
}

export default AreaPersonale;
