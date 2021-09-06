import React from "react";
import { Link } from "react-router-dom";
// importamos neustro contexto
import { StateContex } from "../../State";

import LogoHelp from "../../assets/icons/help.png";
import LogoUpload from "../../assets/icons/upload.png";
import LogoSearch from "../../assets/icons/search.png";

function Search() {
  //  pasamos a nuestro react hook el contexto de nuestra aplicacion: ""
  const { search, CambiarValorSearch } = React.useContext(StateContex);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);

    CambiarValorSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-container_input">
        <div className="icon-container icon-searh">
          <img src={LogoSearch} alt="logo de busqueda" />
        </div>{" "}
        <input
          placeholder="Buscar fotos"
          type="text"
          value={search.value}
          onChange={onSearchValueChange}
        />
      </div>
      <button className="icon-container">
        <img src={LogoUpload} alt="Logo de Upload" />
      </button>
      <button className="icon-container">
        <img src={LogoHelp} alt="Logo de Help" />
      </button>
    </div>
  );
}

export default Search;
