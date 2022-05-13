import React from "react";
import Login from "./components/auth/Login/Login.js";
import Benvenuto from "./components/auth/Welcome.js";
import Successo from "./components/auth/Success.js";
import Home from "./components/home/Home.js";
import UserArea from "./components/userArea/UserArea";
import Results from "./components/results/Results.js";
import Navbar from "./components/navbar/Navbar";
import Details from "./components/details/Details";
import Registrazione from "./components/auth/Registration/Registration";
import PWDimenticata from "./components/auth/ForgotPassword/ForgotPassword";
import PWVerifica from "./components/auth/ForgotPassword/ForgotPasswordVerification";
import RootStore from "./stores/RootStore";
import { ContextProvider } from "./Context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

function View() {
  const store = new RootStore();
  return (
    <ContextProvider value={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passwordDimenticata" element={<PWDimenticata />} />
          <Route
            path="/passwordDimenticata/verifica"
            element={<PWVerifica />}
          />
          <Route path="/registrazione" element={<Registrazione />} />
          <Route path="/areaPersonale" element={<UserArea />} />
          <Route path="/classifica" element={<Results />} />
          <Route path="/classifica/:locale" element={<Results />} />
          <Route path="/dettagliLocale" element={<Details />} />
          <Route path="/benvenuto" element={<Benvenuto />} />
          <Route path="/successo" element={<Successo />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default View;
