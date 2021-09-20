import React from "react";
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
  const { search, inputSubir, CambioInputSubir, CambiarValorSearch } =
    React.useContext(StateContex);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);

    CambiarValorSearch(event.target.value);
  };

  const onInputChangeValue = (event) => {
    if (event.target.value) {
      CambioInputSubir(event.target.value);
    }
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
        />
      </div>
      <button className="icon-container">
        {/* <img src={LogoUpload} alt="Logo de Upload" /> */}
        <div className="file-select" id="src-file1">
          <input
            accept="image/png,image/jpeg"
            onChange={onInputChangeValue}
            type="file"
            name="file"
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
