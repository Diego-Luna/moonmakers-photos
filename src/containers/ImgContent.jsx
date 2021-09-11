import React from "react";
import { StateContex } from "../state";
import { useParams } from "react-router-dom";

import NotContentFotos from "../components/notContetent/FotosAll";
import NotContentSearch from "../components/notContetent/Explorar";
import NotContentSharing from "../components/notContetent/Sharing";
import NotContentFavoritos from "../components/notContetent/Favoritos";
import NotContentAlbums from "../components/notContetent/Albums";
import NotContentArchive from "../components/notContetent/Archive";
import NotContentTrash from "../components/notContetent/Trash";

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
  if (
    stateFotos.favoritos.listFavoritos &&
    stateFotos.favoritos.value === true
  ) {
    return (
      <div className="center-all" style={{ width: "80%" }}>
        <NotContentFavoritos />
      </div>
    );
  }
  if (stateFotos.albumes.listAlbumes && stateFotos.albumes.value === true) {
    return (
      <div className="center-all" style={{ width: "80%" }}>
        <NotContentAlbums />
      </div>
    );
  }

  if (stateFotos.archivo.listArchivo && stateFotos.archivo.value === true) {
    return (
      <div className="center-all" style={{ width: "80%" }}>
        <NotContentArchive />
      </div>
    );
  }

  if (stateFotos.papelera.listPapelera && stateFotos.papelera.value === true) {
    return (
      <div className="center-all" style={{ width: "80%" }}>
        <NotContentTrash />
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
