import React from "react";

function LandingSearch({ children }) {
  return (
    <div className="container-secction-fotos">
      <div className="fotos-suptitle-container">
        <h2 className="fotos-suptitle">Explorar</h2>
      </div>

      {children}
    </div>
  );
}

export default LandingSearch;
