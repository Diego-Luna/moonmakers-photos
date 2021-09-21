import React from "react";

function LandingSearch({ children, text }) {
  return (
    <div className="container-secction-fotos">
      <div className="fotos-suptitle-container">
        {/* <h2 className="fotos-suptitle">Explorar</h2> */}
        <h2 className="fotos-suptitle">{text}</h2>
      </div>

      {children}
    </div>
  );
}

export default LandingSearch;
