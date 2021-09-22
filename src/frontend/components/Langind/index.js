import React from "react";

import BotomBlue from "../General/Buttons/BotomBlue";
import "../../assets/styles/components/langind.css";

import ImgPhote from "../../assets/img/devicesMobile.jpg";
import ImgTablet from "../../assets/img/tablet.jpg";
import ImgSearch from "../../assets/img/search.png";
import imgCompartir from "../../assets/img/comparte.png";
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink="
            width="70"
            height="45"
            viewBox="0 0 70 45"
            version="1.1"
          >
            <defs>
              <path id="a" d="M0 0h23v13H0z" />
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(47 20)">
                <mask id="b" fill="#fff">
                  {/* <use xlink="#a" /> */}
                  <use xlink="#a" />
                </mask>
                <path
                  d="M16.539 0c-3.103 0-5.693 2.2-6.317 5.132H3.91C1.75 5.132 0 6.893 0 9.066S1.751 13 3.91 13h12.63C20.107 13 23 10.09 23 6.5S20.107 0 16.539 0"
                  fill="#E8F0FE"
                  mask="url(#b)"
                />
              </g>
              <path
                fill="#CECECE"
                opacity=".7"
                d="M28.496 32.459l9.944-.854 1.064 11.936-9.944.854z"
              />
              <path
                d="M39.568 0C34.6 0 30.266 2.712 27.942 6.742a9.007 9.007 0 00-6.2-2.466c-4.062 0-7.5 2.684-8.653 6.383h-4.96C3.64 10.66 0 14.318 0 18.83 0 23.343 3.64 27 8.13 27h31.438C46.987 27 53 20.956 53 13.5S46.987 0 39.568 0"
                fill="#4285F4"
              />
              <path
                fill="#FBBC04"
                d="M15.473 20.23l11.818 2.083-2.605 14.772-11.817-2.084z"
              />
            </g>
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55px"
            height="56px"
            viewBox="0 0 55 56"
            version="1.1"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="search-copy"
                transform="translate(-761.000000, -181.000000)"
              >
                <g id="Group-6" transform="translate(760.104405, 181.000000)">
                  <rect
                    id="Rectangle"
                    fill="#4285F4"
                    x="0.895595348"
                    y="13"
                    width="24"
                    height="4"
                  />
                  <circle
                    id="Oval"
                    stroke="#979797"
                    strokeWidth="2"
                    fill="#FFFFFF"
                    cx="39.8955953"
                    cy="15"
                    r="14"
                  />
                  <polygon
                    id="Rectangle"
                    fill="#9AA0A6"
                    transform="translate(30.712772, 40.953691) rotate(19.000000) translate(-30.712772, -40.953691) "
                    points="24.9139933 34.0153316 36.529949 34 36.511551 47.8920503 24.8955953 47.9073819"
                  />
                  <rect
                    id="Rectangle-Copy-4"
                    fill="#FBBC04"
                    x="34"
                    y="22"
                    width="11"
                    height="14"
                  />
                  <polygon
                    id="Rectangle-Copy-5"
                    fill="#CECECE"
                    transform="translate(47.713197, 46.957055) rotate(-24.000000) translate(-47.713197, -46.957055) "
                    points="41.8955953 40 53.5085906 40.0185063 53.5307981 53.9141091 41.9178029 53.8956028"
                  />
                </g>
              </g>
            </g>
          </svg>
          <h2>Encuentra las fotos mas rapido</h2>
          <p>
            Tus fotos se organizan automaticamente y están <br /> disponibles
            para busquedas para que las encuentres <br /> facilmente
          </p>
          <figure className="img-container-in-three ImgSearch-container">
            {/* imagen de ejemplo de computadora */}
            <img
              className="ImgSearch"
              src={ImgSearch}
              alt="ejemplo de busqueda en las fotos por AI"
            />
          </figure>
        </div>
      </section>

      {/* Guarda y comparte fácilmente lo que realmente te importa */}
      <section className="secction container">
        <div className="text-center">
          {/* <figure className="img-container"> */}
          {/* logo de compartir en familia */}
          {/* </figure> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="44"
            viewBox="0 0 68 44"
            version="1.1"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M1.33 24.479a5.996 5.996 0 012.643-1.91c1.572-.574 2.466-2.218 2.166-3.88a9.11 9.11 0 011.832-7.305A8.92 8.92 0 0114.824 8H31.2v13.8h-8.588a8.92 8.92 0 01-7.29 4.317 3.517 3.517 0 00-3.324 3.027 6.107 6.107 0 01-1.798 3.547 5.921 5.921 0 01-7.389.753c-3.086-1.985-3.709-6.166-1.481-8.965"
                fill="#3C4043"
              />
              <path
                d="M56.042 20.157l5.968 4.918h5.19v5.145a3.032 3.032 0 01-3.036 3.029h-2.933c-1.399 0-2.754-.486-3.834-1.374l-3.487-2.87V44H31.2V18.4h19.943c1.789 0 3.52.621 4.9 1.757"
                fill="#FBBC04"
              />
              <path
                d="M41.433 14.794c-3.861 1.315-8.085-.671-9.433-4.435L45.984 5.6c1.348 3.764-.69 7.88-4.55 9.194"
                fill="#9AA0A6"
              />
              <path
                d="M36.167 1.206c3.861-1.315 8.085.67 9.433 4.435L31.616 10.4c-1.348-3.764.69-7.88 4.55-9.194"
                fill="#5F6368"
              />
              <path
                d="M26.177 1.187c3.868 1.288 5.94 5.413 4.63 9.213L16.8 5.735c1.311-3.8 5.51-5.837 9.377-4.548"
                fill="#3C4043"
              />
              <path
                d="M8 44h23.2V18.4H16.785C11.933 18.4 8 22.24 8 26.978V44z"
                fill="#4285F4"
              />
              <path
                d="M21.823 14.813c-3.868-1.288-5.94-5.413-4.63-9.213L31.2 10.265c-1.311 3.8-5.51 5.837-9.377 4.548M39.2 21.224c.82.829 2.15.829 2.97 0l.816-.826v2.958c0 1.086.426 2.127 1.186 2.895l2.52 2.549 2.522-2.55a4.116 4.116 0 001.186-2.894v-4.408c0-2.07-1.66-3.748-3.707-3.748-1.031 0-1.963.426-2.635 1.112L39.2 21.224z"
                fill="#5F6368"
              />
              <path stroke="#5F6368" strokeWidth=".8" d="M14.4 43.2V28.8" />
              <path
                d="M17.6 17.6a2.22 2.22 0 01-2.22 2.22h-1.22l2.187 2.185a4.28 4.28 0 011.253 3.027V28.8h-3.768a4.28 4.28 0 01-3.027-1.253l-3.257-3.258a3.918 3.918 0 012.791-6.688V17.6H17.6zM65.6 24.782V17.6c1.325 0 2.4.98 2.4 2.189V24.8l-2.4-.018z"
                fill="#9AA0A6"
              />
              <path
                d="M60.379 22.4h4.842c.651 0 1.179-.51 1.179-1.14V9.94c0-.63-.528-1.14-1.179-1.14H60.38c-.651 0-1.179.51-1.179 1.14v11.32c0 .63.528 1.14 1.179 1.14"
                fill="#3C4043"
              />
              <path
                d="M57.6 18.261l.059-.12c.607-1.235 2.045-1.703 3.196-1.04l5.667 3.267L68 22.183v2.688c0 1.732-1.714 2.857-3.166 2.077l-3.828-2.055c-.737-.396-1.201-1.2-1.201-2.077v-3.197L57.6 18.261z"
                fill="#9AA0A6"
              />
            </g>
          </svg>

          <h2 className="text-center">
            Guarda y comparte facilmente <br /> lo que realmente te importa
          </h2>

          <p>Comparte fotos y álbumes con amigos y familiares.</p>

          <figure className="img-container img-container-in-three img-container-big">
            <img
              className="img-clasic"
              src={imgCompartir}
              alt="ejemplo de compartir imagenes"
            />
          </figure>
        </div>
      </section>

      {/* Edita tus recuerdos para darles vida */}
      <section className="secction container">
        <div className="container-secction-small">
          <img
            src="https://www.google.com/photos/static/2020/images/index/icon_editing.svg"
            alt=""
          />
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
    </React.Fragment>
  );
}

export default LangindUI;
