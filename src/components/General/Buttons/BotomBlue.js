import React from "react";
import { Link } from "react-router-dom";

import "../../../assets/styles/components/General/botomBlue.css"

function BotomBlue({ url = false, text }) {
  return (
    <button className="BotomBlue">
      {url ? <Link to={url}><b className="BotomBlue__text" >{text}</b></Link> : <b className="BotomBlue__text" >{text}</b>}
    </button>
  );
}

export default BotomBlue;
