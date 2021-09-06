import React from "react";
import { Link } from "react-router-dom";

import LogoHelp from "../../assets/icons/help.png";
import LogoUpload from "../../assets/icons/upload.png";
import LogoSearch from "../../assets/icons/search.png";

function Search() {
  return (
    <div className="search-container">
      <div className="search-container_input">
        <div className="icon-container icon-searh" >
          <img src={LogoSearch} alt="logo de busqueda" />
        </div>{" "}
        <input type="text" />
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
