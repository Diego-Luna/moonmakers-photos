import React from "react";
import "../assets/styles/components/footer.css";

import MoonMakersLogo from "../assets/img/MoonMakers.png";

function Footer() {
  return (
    <footer>
      <figure>
        <img src={MoonMakersLogo} alt="MoonMakers logo" />
      </figure>
      <ol type="1">
        <li>Requiere conexión a Internet y una cuenta de Google.</li>
        <li>
          La función solo está disponible para fotos hechas en "Modo retrato" o
          equivalente.
        </li>
        <li>La impresión no está disponible en todos los países.</li>
        <li>Es necesario comprar una pantalla compatible adicional.</li>
      </ol>
    </footer>
  );
}

export default Footer;
