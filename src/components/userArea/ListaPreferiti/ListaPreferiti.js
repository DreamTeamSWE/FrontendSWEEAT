import cestino from "../../../images/delete.png";
import React from "react";
import { Link } from "react-router-dom";
import ListaPreferitiViewModel from "./ListaPreferitiVM";
import { useStore } from "../../../Context";

import { observer } from "mobx-react";

function ListaPreferiti() {
  const { lista, removeClick } = ListaPreferitiViewModel(useStore());

  return (
    <div className="listaPreferiti">
      <h1>Lista Preferiti</h1>
      {lista &&
        lista.map((locale, index) => {
          return (
            <div className="localePreferito" key={index}
            >
              <Link
                to="/dettagliLocale"
                state={{ id_rist: locale.id }}
              >
                {locale.name}
              </Link>
              <img src={cestino} alt="rimuovi ristorante" onClick={() => removeClick(locale.id)} />
            </div>
          );
        })}
      {!lista && <h2>Nessun preferito...al momento.</h2>}
    </div>
  );
}

export default observer(ListaPreferiti);
