import React from 'react';

function Dato(props) {
    return <div className="dato">
        <label className="dateName" >{props.dateName}</label>
        <label className="dateValue">{props.dateValue}</label>
    </div>
}
export default Dato;
