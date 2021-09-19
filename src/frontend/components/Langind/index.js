import React from "react";

import BotomBlue from "../General/Buttons/BotomBlue";
import "../../assets/styles/components/langind.css";

import ImgPhote from "../../assets/img/devicesMobile.jpg";
import ImgTablet from "../../assets/img/tablet.jpg";
// import ImgSearch from "../../assets/img/imgtest.webp";
// import ImgSearch from "../../assets/img/img34.webp";
// import imgCompartir from "../../assets/img/img38.webp";
// import imgEditar from "../../assets/img/img40.webp";

function LangindUI() {
  return (
    <React.Fragment>
      {/* intro a about */}
      <section className="secction intro ">
        <div>
          <h1>
            El hogar de tus <br /> recuerdos
          </h1>
          <BotomBlue url="/photos/" text="Ir a MoonMakers Fotos" />
        </div>
      </section>

      {/* tus recuerdos en toos los dispositivos */}
      <section className="secction container ">
        <div className="container-secction-small">
          <h2>
            Tus recuerdos en <br /> todos los <br /> dispositivos
          </h2>
          <p>
            Crea copias de seguridad de tus fotos y videos en Google Fotos y
            disfruta de ellos en cualquier dispositivo
          </p>
        </div>
        <figure className="container-secction-big img-container">
          {/* imagen de telefonos a computadoras */}
          <img
            className="img-h-2"
            src={ImgPhote}
            alt="imagen de ejemplo de tus fotos en telefono"
          />
          <img
            className="img-w-2"
            src={ImgTablet}
            alt="imagen de ejemplo de tus fotos en tableta"
          />
        </figure>
      </section>

      {/* Encuentra fotos mas rapido */}
      <section className="secction container">
        <div className="text-center">
          <figure className="img-container">{/* logo de busqueda */}</figure>
          <h2>Encuentra las fotos mas rapido</h2>
          <p>
            Tus fotos se organizan automaticamente y están <br /> disponibles
            para busquedas para que las encuentres <br /> facilmente
          </p>
          <figure className="img-container-in-three ImgSearch-container">
            {/* imagen de ejemplo de computadora */}
            {/* <img
              className="ImgSearch"
              src={ImgSearch}
              alt="ejemplo de busqueda en las fotos por AI"
            /> */}
          </figure>
        </div>
      </section>

      {/* Guarda y comparte fácilmente lo que realmente te importa */}
      <section className="secction container">
        <div>
          <figure className="img-container">
            {/* logo de compartir en familia */}
          </figure>

          <h2 className="text-center">
            Guarda y comparte facilmente <br /> lo que realmente te importa
          </h2>

          <p>Comparte fotos y álbumes con amigos y familiares.</p>

          <figure className="img-container">
            {/* <img
              className="mg-w-2"
              src={imgCompartir}
              alt="ejemplo de compartir imagenes"
            /> */}
          </figure>
        </div>
      </section>

      {/* Edita tus recuerdos para darles vida */}
      <section className="secction container">
        <div className="container-secction-small">
          <h2>
            Edita tus <br /> recuerdos para <br /> darles vida
          </h2>
          <p>
            Da al momento perfecto el acabado perfecto con las herramientas de
            edición y los filtros inteligentes
          </p>
        </div>
        <figure className="container-secction-big img-container">
          {/* imagen de ejemplo de computadora */}
          {/* <img
            className="mg-w-2"
            src={imgEditar}
            alt="Imagen de ejemplo de editar"
          /> */}
        </figure>
      </section>

      {/* Saca el máximo partido de tus recuerdos con Google Fotos */}
      <section className="secction container">
        <div className="text-center">
          <figure className="img-container">
            {/* Logo de MoonMakers Photos */}
          </figure>
          <h2>
            Saca el máximo partido de tus recuerdos <br /> con Google Fotos
          </h2>
          <BotomBlue url="/photos/" text="Ir a MoonMakers Fotos" />
        </div>
      </section>

      <form
        // action="/photos/upload"
        // action="http://localhost:3000/upload"
        action="http://localhost:3000/api/photos"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="file" name="file" />
        <input type="submit" value="Subir" />
      </form>
    </React.Fragment>
  );
}

export default LangindUI;
