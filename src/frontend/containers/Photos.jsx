import React from "react";
import ImgContent from "./ImgContent.jsx";
import Menu from "../components/Menu";
import MenuFotos from "../components/MenuFotos";
import { Modal } from "../components/Modal";

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
