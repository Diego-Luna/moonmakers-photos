import React, { useRef } from "react";

import { Redirect } from "react-router-dom";

// importamos neustro contexto
import { StateContex } from "../../state";

import LogoHelp from "../../assets/icons/help.png";
// import LogoUpload from "../../assets/icons/upload.png";
import LogoSearch from "../../assets/icons/search.png";

// span
import "../../assets/styles/components/search.css";

function Search() {
  //  pasamos a nuestro react hook el contexto de nuestra aplicacion: ""
  const {
    search,
    inputSubir,
    CambioInputSubir,
    CambiarValorSearch,
    Datosfiltrados,
  } = React.useContext(StateContex);

  // const refContainer = useRef(initialValue);
  const inputEl = useRef(null);
  const inputURL = useRef(null);

  const onSearchValueChange = () => {
    CambiarValorSearch(inputEl.current.value);
    Datosfiltrados(inputEl.current.value);
  };

  // const onInputChangeValue = (event) => {
  //   if (event.target.value) {
  //     CambioInputSubir(event.target);
  //   }
  // };
  const onInputChangeValue = () => {
    // console.log("inputURL.current =>");
    // console.log(inputURL.current);
    CambioInputSubir(inputURL.current);
  };

  return (
    <div className="search-container">
      <div className="search-container_input">
        <div className="icon-container icon-searh">
          <img src={LogoSearch} alt="logo de busqueda" />
        </div>
        <input
          placeholder="Buscar fotos"
          type="text"
          value={search.value}
          onChange={onSearchValueChange}
          ref={inputEl}
        />
      </div>
      <button className="icon-container">
        {/* <img src={LogoUpload} alt="Logo de Upload" /> */}
        <div className="file-select" id="src-file1">
          {/* <input
            accept="image/png,image/jpeg"
            onChange={onInputChangeValue}
            type="file"
            name="file"
          /> */}
          <input
            accept="image/png,image/jpeg"
            type="file"
            name="file"
            onChange={onInputChangeValue}
            ref={inputURL}
          />
        </div>
      </button>
      <button className="icon-container">
        <img src={LogoHelp} alt="Logo de Help" />
      </button>
    </div>
  );
}

export default Search;
