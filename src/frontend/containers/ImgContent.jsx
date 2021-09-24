import React from "react";
import { StateContex } from "../state";
import { useParams } from "react-router-dom";

import NotContentFotos from "../components/notContetent/fotosall";
import NotContentSearch from "../components/notContetent/explorar";
import NotContentSharing from "../components/notContetent/sharing";
import NotContentFavoritos from "../components/notContetent/favoritos";
import NotContentAlbums from "../components/notContetent/albums";
import NotContentArchive from "../components/notContetent/archive";
import NotContentTrash from "../components/notContetent/trash";
import NotContentUtils from "../components/notContetent/utils";

import AllFotos from "../components/fotos";
import LandingSearch from "../components/landingsearch";

import "../assets/styles/container/ImgContent.css";

function ImgContent() {
  const { name } = useParams();

  const { stateFotos, search, allFotos } = React.useContext(StateContex);

  // console.log("_stateFotos_:", stateFotos);
  // console.log("allFotos", allFotos);
  // console.log("search.imgs: ", search.imgs);

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
  if (stateFotos.explorar.value === true) {
    if (search.imgs.length === 0) {
      return (
        <div className="center-all conteiner-photos-content">
          {/* <div className="conteiner-photos-content"> */}
          <NotContentSearch />
        </div>
      );
    } else {
      return (
        <div className="center-all conteiner-photos-content">
          {/* <div className="conteiner-photos-content"> */}
          <LandingSearch text={"Explorar"}>
            <div className="conteiner-photos-content container-data-img">
              <AllFotos data={search.imgs} />
            </div>
          </LandingSearch>
        </div>
      );
    }
  }
  if (stateFotos.compartido.data && stateFotos.compartido.value === true) {
    return (
      <div className="center-all conteiner-photos-content">
        <NotContentSharing />
      </div>
    );
  }

  if (stateFotos.utilidades.value === true) {
    if (stateFotos.utilidades.data.length === 0) {
      return (
        <div className="center-all conteiner-photos-content">
          {/* <NotContentArchive /> */}
          <NotContentUtils />
        </div>
      );
    } else {
      return (
        <div className="center-all conteiner-photos-content">
          <LandingSearch text={"Clean AI"}>
            <div className="conteiner-photos-content container-data-img">
              <AllFotos data={stateFotos.utilidades.data} />
            </div>
          </LandingSearch>
        </div>
      );
    }
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
