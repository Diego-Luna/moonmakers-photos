import React from "react";
import { StateContex } from "../state";
import { useParams } from "react-router-dom";

import NotContentFotos from "../components/notContetent/FotosAll";
import NotContentSearch from "../components/notContetent/Explorar";

function ImgContent() {
  const { name } = useParams();
  console.log("url: ", name);

  const { stateFotos } = React.useContext(StateContex);

  // if (stateFotos.fotos.alldata) {
  //   return (
  //     <div className="center-all" style={{ width: "80%" }}>
  //       <NotContentFotos />
  //     </div>
  //   );
  // }
  // if (stateFotos.explorar.data) {
  //   return (
  //     <div className="center-all" style={{ width: "80%" }}>
  //       <NotContentSearch />
  //     </div>
  //   );
  // }

  return (
    <div style={{ width: "80%" }}>
      <p>URL img: {name}</p>
    </div>
  );
}

export default ImgContent;
