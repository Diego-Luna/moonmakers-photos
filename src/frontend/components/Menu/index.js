import React from "react";
import { Link } from "react-router-dom";

import Search from "./search";
import User from "./seccionuser";

import MoonMakerPhotos from "../../assets/img/MoonMakers.png";
// import "../../assets/styles/components/menu.css";
import "../../assets/styles/components/menu.css";
import BotomBlue from "../general/buttons/botomblue";

function Menu({ enPhotos }) {
  const URLLogo = () => {
    if (enPhotos) {
      return "/photos/";
    } else {
      return "/";
    }
  };

  return (
    <nav className={`${enPhotos ? "nav-fotos" : "nav"}`}>
      {/* seccion del logo */}
      <Link className="logo--container" to={() => URLLogo()}>
        <img src={MoonMakerPhotos} alt="Logo de MoonMakers photos" />
      </Link>

      {/* Seccion del buscador */}
      {enPhotos ? <Search /> : <div className="search-container"></div>}

      {/* la seccion del usuario */}
      {enPhotos ? (
        <User />
      ) : (
        <div className="button-containe">
          <BotomBlue
            className="user--container"
            url="/photos/"
            text="Ir a MoonMakers Fotos"
          />
        </div>
      )}
    </nav>
  );
}

export default Menu;
