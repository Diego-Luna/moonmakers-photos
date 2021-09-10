import React from "react";

// importamos neustro contexto
import { StateContex } from "../../../state";

import "../../../assets/styles/components/General/botomStateGray.css";

function BotomStateGray({ varState, stateReference, icon, alt }) {
  //  pasamos a nuestro react hook el contexto de nuestra aplicacion
  // const { ChangeValueBotonsOnOff } = React.useContext(StateContex);

  return (
    <button
      // onClick={() => ChangeValueBotonsOnOff(stateReference)}
      className={`BotomStateGray  ${varState ? "botonOn" : "botonOff"}`}
    >
      <figure className="icon-container-h icon-container-menu">
        <img src={icon} alt={alt} />
      </figure>
    </button>
  );
}

export default BotomStateGray;