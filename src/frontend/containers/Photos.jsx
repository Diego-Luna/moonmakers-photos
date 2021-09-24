import React from "react";
import ImgContent from "./imgcontent.jsx";
import Menu from "../components/menu";
import MenuFotos from "../components/menufotos";
import { Modal } from "../components/modal";

// import { StateContex } from "../";
import { StateContex } from "../state";

function Photos() {
  const { openModal } = React.useContext(StateContex);

  return (
    <div>
      <Menu enPhotos={true} />
      <div className="container-fotos">
        <MenuFotos />
        <ImgContent />
        {/* cuando openModal sea true, no renderice el componente Modal */}
        {!!openModal.value && <Modal Error={openModal.error}></Modal>}
      </div>
    </div>
  );
}

export default Photos;
