import React from "react";
import { StateContex } from "../state";
import { useParams } from "react-router-dom";

import NotContentFotos from "../components/notContetent/FotosAll";
import NotContentSearch from "../components/notContetent/Explorar";
import NotContentSharing from "../components/notContetent/Sharing";

import "../assets/styles/container/ImgContent.css";

function ImgContent() {
  const { name } = useParams();
  console.log("url: ", name);

  const { stateFotos } = React.useContext(StateContex);

  if (stateFotos.fotos.alldata && stateFotos.fotos.value === true) {
    return (
      <div className="center-all" style={{ width: "80%" }}>
        <NotContentFotos />
      </div>
    );
  }
  if (stateFotos.explorar.data && stateFotos.explorar.value === true) {
    return (
      <div className="center-all" style={{ width: "80%" }}>
        <NotContentSearch />
      </div>
    );
  }
  if (stateFotos.compartido.data && stateFotos.compartido.value === true) {
    return (
      <div className="center-all" style={{ width: "80%" }}>
        <NotContentSharing />
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
