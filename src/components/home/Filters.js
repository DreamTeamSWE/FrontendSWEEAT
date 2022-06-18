import React from "react";
import "./Filters.css";
import Punteggio from "./Filtri/Punteggio.js";
import { useStore } from "../../Context";
import FiltersVM from "./FiltersVM";

function Filters(props) {
  const {
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
  } = FiltersVM(useStore());
  return (
    <div className="filtri">
      <p>Filtra classifica</p>
      <form className="formFiltri" onSubmit={handleClick}>
        {/*<div className="zona">
          <label>Zona</label>
          <select value={zone} onChange={zoneHandler}>
            <option key="-1" value="">
              Tutte le zone
            </option>
            {cities &&
              cities.map((item, index) => (
                <option key={index} value={item.city}>
                  {" "}
                  {item.city}{" "}
                </option>
              ))}
          </select>
          <input
            id="zona"
            list="zone"
            type="text"
            className="zonaText"
            placeholder="Inserisci la zona"
            onChange={zoneHandler}
            value={zone}
          />
          <div className="radius">
            <label>Radius</label>
            <input
              type="range"
              min={1}
              max={50}
              step={1}
              value={range}
              onChange={rangeHandler}
            />
            <label className="range">{range} Km</label>
          </div>
        </div>*/}

        <div className="cities">
          <label htmlFor="zona">Zona</label>
          <input
            id="zona"
            list="zone"
            type="text"
            className="zonaText"
            placeholder="Inserisci la zona"
            onChange={zoneHandler}
            value={zone}
          />
          <datalist id="zone">
            <option key="-1" value="Tutte le zone">
              Tutte le zone
            </option>
            {cities &&
              cities.map((item, index) => (
                <option key={index} value={item.city}>
                  {item.city}
                </option>
              ))}
          </datalist>
          <div className="radius">
            <label>Raggio</label>
            <input
              type="range"
              min={1}
              max={50}
              step={1}
              value={range}
              onChange={rangeHandler}
            />
            <label className="range">{range} Km</label>
          </div>
        </div>

        <div className="categories">
          <label htmlFor="cucina">Categoria</label>
          <input
            id="cucina"
            list="category"
            type="text"
            className="cucinaText"
            placeholder="Inserisci il tipo di cucina"
            onChange={categoryHandler}
            value={category}
          />
          <datalist id="category">
            <option key="-1" value="Tutte le categorie">
              Tutte le categorie
            </option>
            {categories &&
              categories.map((item, index) => (
                <option key={index} value={item.category}>
                  {item.category}
                </option>
              ))}
          </datalist>
        </div>
        {/*<Punteggio />*/}
        <input type="submit" className="salva" value="Applica Filtri" />
        {isFiltered && (
          <input
            type="button"
            className="reset"
            value="Rimuovi Filtri"
            onClick={removeFilter}
          />
        )}
      </form>
    </div>
  );
}

export default Filters;
