import React from "react";
import ReactDOM from "react-dom";

import "../../assets/styles/components/modal.css";

// function Modal({ children }) {
function Modal(props) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {/* {children} */}

      {props.Error ? (
        <div>
          <p>Error</p>
          <h2>Intentelo en otro momentos</h2>
        </div>
      ) : (
        <div>
          <p>Subiendo a</p>
          <h2>MoonMakers Fotos</h2>
        </div>
      )}
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
