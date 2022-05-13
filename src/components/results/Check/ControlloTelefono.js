import React from 'react';
import telefono from '../../../images/phone-call.png';
import './../css/cards.css';

export default function CheckPhone(props) {
  if (props.phone !== "") {
    return (
      <div className="telefono">
        <img src={telefono} alt="Chiama" />
        <a href={"tel:" + props.phone}>{props.phone}</a>
      </div>
    )
  }
  return (
    <p />
  );
}
