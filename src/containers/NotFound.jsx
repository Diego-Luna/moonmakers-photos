import React from "react";
import { Link } from "react-router-dom";

import LogoMoonMakers from "../assets/img/MoonMakers.png";
import Robot from "../assets/img/robot.png";

import "../assets/styles/container/NotFound.css";

function NotFound() {
  return (
    <section className="center-all height-vh">
      <div className="notfound-container">
        <div>
          <Link to="/" >
            <div className="img-container-notfound">
              <img src={LogoMoonMakers} alt="" />
            </div>
          </Link>

          <p style={{ color: "#777" }}>
            <b style={{ color: "black" }}>404</b>. Se trata de un error.
          </p>
          <p style={{ color: "#222" }}>
            No se ha encontrado la URL solicitada en este servidor.
          </p>
          <p style={{ color: "#777" }}>
            Esa es toda la información de la que disponemos.
          </p>
        </div>
        <div>
          <img src={Robot} alt="" />
        </div>
      </div>
    </section>
  );
}

export default NotFound;
