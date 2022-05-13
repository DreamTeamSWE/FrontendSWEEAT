import React, { useState } from "react";
import "./Punteggio.css";

import happy from "../../../images/happy.png";

function Testo() {
  const [volume, setVolume] = useState(0.3);

  return (
    <>
      <div id="testoSlider">
        <p className="testo">Testo</p>
        <section className="slider">
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={(event) => {
              setVolume(event.target.valueAsNumber);
            }}
          />
        </section>
      </div>
      <div className="mobileSlider mobileTestoSlider">
        <label className="mobileTesto">Testo</label>
        <select name="Testo">
          <option value="" defaultValue disabled className="select">
            Testo
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </>
  );
}

function Foto() {
  const [volume, setVolume] = useState(0.3);

  return (
    <>
      <div id="fotoSlider">
        <label className="testo">Foto</label>
        <section className="slider">
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={(event) => {
              setVolume(event.target.valueAsNumber);
            }}
          />
        </section>
      </div>
      <div className="mobileSlider mobileFotoSlider">
        <label className="mobileTesto">Foto</label>
        <select name="Foto">
          <option value="" defaultValue disabled className="select">
            Foto
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </>
  );
}

function Emoticon() {
  const [volume, setVolume] = useState(0.3);

  return (
    <>
      <div id="emoticonSlider">
        <label className="testo">Emoticon</label>
        <section className="slider">
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={(event) => {
              setVolume(event.target.valueAsNumber);
            }}
          />
        </section>
      </div>
      <div className="mobileSlider emoticonTestoSlider">
        <label className="mobileTesto">Emoticon</label>
        <select name="Emoticon">
          <option value="" defaultValue disabled className="select">
            Emoticon
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </>
  );
}

function Punteggio() {
  return (
    <div className="punteggio">
      <p>Ordina per </p>
      <Foto />
      <Testo />
      <Emoticon />
    </div>
  );
}

export default Punteggio;
