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

  const { stateFotos } = React.useContext(StateContex);

  console.log("_stateFotos_:", stateFotos);

  if (stateFotos.fotos.value === true) {

    if (stateFotos.fotos.alldata.length === 0) {
      return (
        <div className="center-all conteiner-photos-content">
          <NotContentFotos />
        </div>
      );
    } else {
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
  if (stateFotos.favoritos.value === true) {

    if (stateFotos.favoritos.listFavoritos.length === 0) {

      return (
        <div className="center-all conteiner-photos-content">
          <NotContentFavoritos />
        </div>
      );
    } else {
      return (
        <div className="conteiner-photos-content container-data-img">
          <AllFotos data={stateFotos.favoritos.listFavoritos} />
        </div>
      );
    }
  }
  if (stateFotos.albumes.listAlbumes && stateFotos.albumes.value === true) {
    return (
      <div className="center-all conteiner-photos-content">
        <NotContentAlbums />
      </div>
    );
  }

  if (stateFotos.archivo.value === true) {
    if (stateFotos.archivo.listArchivo.length === 0) {
      return (
        <div className="center-all conteiner-photos-content">
          <NotContentArchive />
        </div>
      );
    } else {
      return (
        <div className="conteiner-photos-content container-data-img">
          <AllFotos data={stateFotos.archivo.listArchivo} />
        </div>
      );
    }
  }

  if (stateFotos.papelera.value === true) {
    if (stateFotos.papelera.listPapelera.length === 0) {
      return (
        <div className="center-all conteiner-photos-content">
          <NotContentTrash />
        </div>
      );
    } else {
      return (
        <div className="conteiner-photos-content container-data-img">
          <AllFotos data={stateFotos.papelera.listPapelera} />
        </div>
      );
    }
  }

  return (
    <div style={{ width: "80%" }}>
      <p>URL img: {name}, error</p>
    </div>
  );
}

export default ImgContent;
