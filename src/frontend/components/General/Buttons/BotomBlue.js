import React from "react";
import { Link } from "react-router-dom";

import "../../../assets/styles/components/General/botomBlue.css";

function BotomBlue({ url = false, text }) {
  const [CheckHover, SetCheckHover] = React.useState(false);

  return (
    <button
      // className="BotomBlue"
      onMouseEnter={() => SetCheckHover(true)}
      onMouseLeave={() => SetCheckHover(false)}
      className={`${CheckHover? "animate__animated animate__pulse" : "" } BotomBlue`}
    >
      {url ? (
        <Link to={url}>
          <b className="BotomBlue__text">{text}</b>
        </Link>
      ) : (
        <b className="BotomBlue__text">{text}</b>
      )}
    </button>
  );
}

export default BotomBlue;
