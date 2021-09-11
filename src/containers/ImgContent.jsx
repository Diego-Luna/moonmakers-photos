import React from "react";
import { StateContex } from "../state";
import { useParams } from "react-router-dom";

import NotContentFortos from "../components/notContetent/FotosAll"

function ImgContent() {
  const { name } = useParams();
  console.log("url: ", name);

  const { stateFotos } = React.useContext(StateContex);

  if (stateFotos.fotos.alldata) {
    return (
      <div className="center-all" style={{ width: "80%" }}>
       <NotContentFortos />
      </div>
    );
  }

  return (
    <div style={{ width: "80%" }}>
      <p>URL img: {name}</p>
    </div>
  );
}

export default ImgContent;
