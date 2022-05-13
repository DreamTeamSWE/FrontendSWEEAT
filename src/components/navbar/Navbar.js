import React from "react";
import { Link } from "react-router-dom";
import hamburger from "./../../images/list.png";
import close from "./../../images/close.png";
import NavbarViewModel from "./NavbarVM";
import { useStore } from "../../Context";

import { observer } from "mobx-react";

import "./css/navbar.css";

function Sidebar(props) {
  return (
    <div className={props.open ? "sidebarWrapper" : "hidden"}>
      {/* <div>
        <ul>
          <li>
            <Link className="sidebarLink" to="/prova1">
              {" "}
              Prova1{" "}
            </Link>
          </li>
          <li>
            <Link className="sidebarLink" to="/prova2">
              {" "}
              Prova2{" "}
            </Link>
          </li>
          <li>
            <Link className="sidebarLink" to="/prova3">
              {" "}
              Prova3{" "}
            </Link>
          </li>
        </ul>
      </div> */}
      <div className="sideBtnWrap">
        <Link className="sidebarButton" to="/registrazione">
          Registrati
        </Link>
        <Link className="sidebarButton" to="/login">
          Accedi
        </Link>
      </div>
    </div>
  );
}

const Navbar = () => {
  const { isOpen, isAuth, setClose, setOpen, onLogout } = NavbarViewModel(
    useStore()
  );

  return (
    <>
      <div className="nav">
        <div className="navbarContainer">
          <Link className="navLogo" to="/">
            Sweeat
          </Link>
          {/* <ul>
            <li>
              <Link className="navLinks" to="/prova1">
                Prova1
              </Link>
            </li>
            <li>
              <Link className="navLinks" to="/prova2">
                Prova2
              </Link>
            </li>
            <li>
              <Link className="navLinks" to="/prova3">
                Prova3
              </Link>
            </li>
          </ul> */}
          {!isAuth && (
            <nav className="navBtn">
              <Link className="navBtnLink" to="/registrazione">
                Registrati
              </Link>
              <Link className="navBtnLink" to="/login">
                Accedi
              </Link>
            </nav>
          )}
          {isAuth && (
            <nav className="navBtn">
              <Link className="navBtnLink" to="/logout" onClick={onLogout}>
                Log out
              </Link>
              <Link className="navBtnLink" to="/areaPersonale">
                Area Personale
              </Link>
            </nav>
          )}
        </div>
      </div>
      <div className={!isOpen ? "sideNav" : "fullSideNav"}>
        <Link className="navLogo" to="/">
          Sweeat
        </Link>
        <Sidebar open={isOpen ? true : false} />
        <button
          className={isOpen ? "closeMenu" : "openMenu"}
          onClick={isOpen ? setClose : setOpen}
        >
          <img src={hamburger} alt="apertura menu" />
        </button>
        <button
          className={!isOpen ? "closeMenu" : "openMenu chiudi"}
          onClick={!isOpen ? setClose : setOpen}
        >
          <img src={close} alt="chiusura menu" />
        </button>
      </div>
    </>
  );
};

export default observer(Navbar);
