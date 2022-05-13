import React from "react";
import "./Filtri.css";

function zonaHandler(e) {
  //qui verrà fatta una post?
  console.log(e.target.value);
}

const items = [
  { value: "MI", label: "Milano" },
  { value: "RM", label: "Roma" },
  { value: "PD", label: "Padova" },
  { value: "VI", label: "Vicenza" },
  { value: "TO", label: "Torino" },
];

function Zona() {
  return (
    <div className="zona">
      <label>Zona</label>
      <select value=" " onChange={zonaHandler}>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {" "}
            {item.label}{" "}
          </option>
        ))}
      </select>
    </div>
  );
}

// function initialize() {
//     var myLatlng = new google.maps.LatLng(51.508742,-0.120850);
//   var mapProp = {
//     center:myLatlng,
//     zoom:5,
//     mapTypeId:google.maps.MapTypeId.ROADMAP
//
//   };
//   var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
//     var marker = new google.maps.Marker({
//       position: myLatlng,
//       map: map,
//       title: 'Hello World!',
//       draggable:true
//   });
//     document.getElementById('lat').value= 51.508742
//     document.getElementById('lng').value= -0.120850
//     // marker drag event
//     google.maps.event.addListener(marker,'drag',function(event) {
//         document.getElementById('lat').value = event.latLng.lat();
//         document.getElementById('lng').value = event.latLng.lng();
//     });
//
//     //marker drag event end
//     google.maps.event.addListener(marker,'dragend',function(event) {
//         document.getElementById('lat').value = event.latLng.lat();
//         document.getElementById('lng').value = event.latLng.lng();
//         alert("lat=>"+event.latLng.lat());
//         alert("long=>"+event.latLng.lng());
//     });
// }
//
// google.maps.event.addDomListener(window, 'load', initialize);

function zona() {
  return (
    <>
      <form action="maps.php" method="post">
        Select your location
        <input type="hidden" name="lat" id="lat" />
        <input type="hidden" name="lng" id="lng" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Zona;
