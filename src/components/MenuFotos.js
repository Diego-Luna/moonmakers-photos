import React from "react";

// importamos neustro contexto
import { StateContex } from "../state";

import BotomStateGray from "../components/General/Buttons/BotomStateGray";

import "../assets/styles/components/menuFotos.css";
import IconTest from "../assets/icons/help.png";

function MenuFotos() {
  //  pasamos a nuestro react hook el contexto de nuestra aplicacion
  const { stateBotons } = React.useContext(StateContex);

  console.log("stateBotons: ", stateBotons);

  return (
    <div className="menuFotos">
      <div className="menuFotos-elements">
        <BotomStateGray
          varState={stateBotons.fotos}
          stateReference={"fotos"}
          text="Fotos"
          icon={IconTest}
          alt="icono de fotos"
        />

        <BotomStateGray
          varState={stateBotons.explorar}
          stateReference={"explorar"}
          text="Explorar"
          icon={IconTest}
          alt="icono de fotos"
        />

        <BotomStateGray
          varState={stateBotons.compartido}
          stateReference={"compartido"}
          text="Compartido"
          icon={IconTest}
          alt="icono de fotos"
        />
      </div>

      <p className="menuFotos-elements">Biblioteca</p>

      <div className="menuFotos-elements">
        <BotomStateGray
          varState={stateBotons.favoritos.value}
          stateReference={"favoritos"}
          text="Favoritos"
          icon={IconTest}
          alt="icono de fotos"
        />

        <BotomStateGray
          varState={stateBotons.albumes.value}
          stateReference={"albumes"}
          text="Albumes"
          icon={IconTest}
          alt="icono de fotos"
        />

        <BotomStateGray
          varState={stateBotons.utilidades}
          stateReference={"utilidades"}
          text="Utilidades"
          icon={IconTest}
          alt="icono de fotos"
        />

        <BotomStateGray
          varState={stateBotons.archivo.value}
          stateReference={"archivo"}
          text="Archivo"
          icon={IconTest}
          alt="icono de fotos"
        />

        <BotomStateGray
          varState={stateBotons.papelera.value}
          stateReference={"papelera"}
          text="Papelera"
          icon={IconTest}
          alt="icono de fotos"
        />
      </div>
    </div>
  );
}

export default MenuFotos;
