import React from "react";

export default function Valutazione(props) {
  if (4.5 < props.val && props.val <= 5) {
    return <p>Eccellente</p>;
  }
  if (4 < props.val && props.val <= 4.5) {
    return <p>Ottimo</p>;
  }
  if (3.5 < props.val && props.val <= 4) {
    return <p>Buono</p>;
  }
  if (3 < props.val && props.val <= 3.5) {
    return <p>Punteggio medio</p>;
  }
  if (2.5 < props.val && props.val <= 3) {
    return <p>Discreto</p>;
  }
  if (2 < props.val && props.val <= 2.5) {
    return <p>Sufficiente</p>;
  }
  if (1.5 < props.val && props.val <= 2) {
    return <p>Scarso</p>;
  }
  if (1 < props.val && props.val <= 1.5) {
    return <p>Pessimo</p>;
  }
  return <p>Indefinibile</p>;
}
