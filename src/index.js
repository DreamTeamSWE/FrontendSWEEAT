import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import View from "./View";
import reportWebVitals from "./reportWebVitals";
import { configure } from "./services/services";

configure();
ReactDOM.render(
  <React.StrictMode>
    <View />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
