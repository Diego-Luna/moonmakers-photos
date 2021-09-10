import React from "react";
import Menu from "../components/Menu";
import MenuFotos from "../components/MenuFotos";

function Photos() {
  return (
    <div>
      <Menu enPhotos={true} />
      <div className="container-fotos">
        <MenuFotos />
        <div style={{width: "80%"}} ></div>
      </div>
    </div>
  );
}

export default Photos;
