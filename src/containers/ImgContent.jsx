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

import AllFotos from "../components/Fotos";

import "../assets/styles/container/ImgContent.css";

function ImgContent() {
  const { name } = useParams();
  console.log("url: ", name);

  const { stateFotos } = React.useContext(StateContex);

  console.log("_stateFotos_:", stateFotos);

  if (stateFotos.fotos.value === true) {
    console.log("El boton de fotos es value es true");
    if (stateFotos.fotos.alldata === []) {
      console.log("no hay datos de fotos");
      return (
        <div className="center-all conteiner-photos-content">
          <NotContentFotos />
        </div>
      );
    } else {
      console.log("El foton de fotos hay datos");
      return (
        <div className="conteiner-photos-content container-data-img">
          <AllFotos data={stateFotos.fotos.alldata} />
        </div>
      );
    }
  }
  if (stateFotos.explorar.data && stateFotos.explorar.value === true) {
    return (
      <div className="conteiner-photos-content">
        <NotContentSearch />
      </div>
    );
  }
  if (stateFotos.compartido.data && stateFotos.compartido.value === true) {
    return (
      <div className="center-all conteiner-photos-content">
        <NotContentSharing />
      </div>
    );
  }
  if (
    stateFotos.favoritos.listFavoritos &&
    stateFotos.favoritos.value === true
  ) {
    return (
      <div className="center-all conteiner-photos-content">
        <NotContentFavoritos />
      </div>
    );
  }
  if (stateFotos.albumes.listAlbumes && stateFotos.albumes.value === true) {
    return (
      <div className="center-all conteiner-photos-content">
        <NotContentAlbums />
      </div>
    );
  }

  if (stateFotos.archivo.listArchivo && stateFotos.archivo.value === true) {
    return (
      <div className="center-all conteiner-photos-content">
        <NotContentArchive />
      </div>
    );
  }

  if (stateFotos.papelera.listPapelera && stateFotos.papelera.value === true) {
    return (
      <div className="center-all conteiner-photos-content">
        <NotContentTrash />
      </div>
    );
  }

  return (
    <div style={{ width: "80%" }}>
      <p>URL img: {name}, error</p>
    </div>
  );
}

export default ImgContent;
