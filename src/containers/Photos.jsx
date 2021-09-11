import React from "react";
import ImgContent from "./ImgContent.jsx";
import Menu from "../components/Menu";
import MenuFotos from "../components/MenuFotos";

import { useParams } from 'react-router-dom'


function Photos() {
  const { name } = useParams();
  console.log("url: ", name);

  return (
    <div>
      <Menu enPhotos={true} />
      <div className="container-fotos">
        <MenuFotos />
        <ImgContent />
      </div>
    </div>
  );
}

export default Photos;
