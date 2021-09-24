import React from "react";

// importamos neustro contexto
import { StateContex } from "../state";

import BotomStateGray from "./general/buttons/botomstategray";

import "../assets/styles/components/menuFotos.css";

function MenuFotos() {
  //  pasamos a nuestro react hook el contexto de nuestra aplicacion
  const { stateFotos } = React.useContext(StateContex);

  return (
    <div className="menuFotos">
      <div className="menuFotos-elements">
        <BotomStateGray
          varState={stateFotos.fotos.value}
          stateReference={"fotos"}
          text="Fotos"
        >
          <svg
            width="24px"
            height="24px"
            className={` ${stateFotos.fotos.value ? "svg-blue" : "svg-gray"} `}
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"></path>
          </svg>
        </BotomStateGray>

        <BotomStateGray
          varState={stateFotos.explorar.value}
          stateReference={"explorar"}
          text="Explorar"
        >
          <svg
            width="24px"
            height="24px"
            className={` ${
              stateFotos.explorar.value ? "svg-blue" : "svg-gray"
            } `}
            viewBox="0 0 24 24"
          >
            <path d="M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"></path>
          </svg>
        </BotomStateGray>

        <BotomStateGray
          varState={stateFotos.compartido.value}
          stateReference={"compartido"}
          text="Compartido"
        >
          <svg
            width="24px"
            height="24px"
            className={` ${
              stateFotos.compartido.value ? "svg-blue" : "svg-gray"
            } `}
            viewBox="0 0 24 24"
          >
            <path d="M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"></path>
          </svg>
        </BotomStateGray>
      </div>

      <p className="menuFotos-elements">Biblioteca</p>

      <BotomStateGray
        varState={stateFotos.utilidades.value}
        stateReference={"utilidades"}
        // text="Utilidades"
        text="Clean AI"
      >
        <svg
          width="24px"
          height="24px"
          className={` ${
            stateFotos.utilidades.value ? "svg-blue" : "svg-gray"
          } `}
          viewBox="0 0 24 24"
        >
          <path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41 12.47 14zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path>
        </svg>
      </BotomStateGray>

      <div className="menuFotos-elements">
        <BotomStateGray
          varState={stateFotos.favoritos.value}
          stateReference={"favoritos"}
          text="Favoritos"
        >
          <svg
            width="24px"
            height="24px"
            className={` ${
              stateFotos.favoritos.value ? "svg-blue" : "svg-gray"
            } `}
            viewBox="0 0 24 24"
          >
            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
          </svg>
        </BotomStateGray>

        <BotomStateGray
          varState={stateFotos.albumes.value}
          stateReference={"albumes"}
          text="Albumes"
        >
          <svg
            width="24px"
            height="24px"
            className={` ${
              stateFotos.albumes.value ? "svg-blue" : "svg-gray"
            } `}
            viewBox="0 0 24 24"
          >
            <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h6v7l2.5-1.88L17 11V4h1v16zm-4.33-6L17 18H7l2.5-3.2 1.67 2.18 2.5-2.98z"></path>
          </svg>
        </BotomStateGray>

        {/* <BotomStateGray
          varState={stateFotos.utilidades.value}
          stateReference={"utilidades"}
          text="Utilidades"
        >
          <svg
            width="24px"
            height="24px"
            className={` ${stateFotos.utilidades.value ? "svg-blue" : "svg-gray"} `}
            viewBox="0 0 24 24"
          >
            <path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41 12.47 14zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path>
          </svg>
        </BotomStateGray> */}

        <BotomStateGray
          varState={stateFotos.archivo.value}
          stateReference={"archivo"}
          text="Archivo"
        >
          <svg
            width="24px"
            height="24px"
            className={` ${
              stateFotos.archivo.value ? "svg-blue" : "svg-gray"
            } `}
            viewBox="0 0 24 24"
          >
            <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm8-5.35V9.5h-2v4.15l-1.79-1.79-1.42 1.41L12 17.48l4.21-4.21-1.42-1.41z"></path>
          </svg>
        </BotomStateGray>

        <BotomStateGray
          varState={stateFotos.papelera.value}
          stateReference={"papelera"}
          text="Papelera"
        >
          <svg
            width="24px"
            height="24px"
            className={` ${
              stateFotos.papelera.value ? "svg-blue" : "svg-gray"
            } `}
            viewBox="0 0 24 24"
          >
            <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13zM9 8h2v9H9zm4 0h2v9h-2z"></path>
          </svg>
        </BotomStateGray>
      </div>
    </div>
  );
}

export default MenuFotos;
