import React from "react";
import "./css/searchBar.css";
import { useNavigate } from "react-router-dom";

const Ricerca = () => {
  const nav = useNavigate();
  let textInput = React.createRef();

  let onOnclickHandler = (e) => {
    nav("/classifica/" + textInput.current.value, {
      state: { locale: textInput.current.value },
    });
  };

  return (
    <form onSubmit={onOnclickHandler}>
      <div className="heroContainer">
        <div className="ricerca">
          <input
            ref={textInput}
            type="text"
            placeholder="Cerca un locale..."
            maxLength="64"
          />
          <button type="submit" >Cerca</button>
        </div>
        <div className="heroBg"></div>
      </div>
    </form >
  );
};

export default Ricerca;
