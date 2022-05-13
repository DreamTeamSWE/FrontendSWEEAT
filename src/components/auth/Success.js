import React from "react";

export default function Success() {
  return (
    <>
      <section className="section auth">
        <div className="container">
          <h1>Ottimo!</h1>
          <p>Sei riuscito a cambiare password</p>
          <a to="/login">Effettua il login ora!</a>
        </div>
      </section>
    </>
  );
}
