import React from "react";

import LogoHelp from "../../assets/icons/help.png";
import LogoUpload from "../../assets/icons/upload.png";
import LogoSearch from "../../assets/icons/search.png";

function Search() {
  return (
    <div className="search-container">
      <div>
        {/* <img src={LogoSearch} /> <input type="text" /> */}
      </div>
      <div>
        <img src={LogoUpload} alt="Logo de Upload" />
      </div>
      <div>
        <img src={LogoHelp} alt="Logo de Help" />
      </div>
    </div>
  );
}

export default Search;
