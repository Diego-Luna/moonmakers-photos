import React from "react";

import "../../assets/styles/components/item.css";
import { StateContex } from "../../state";


function index({ data }) {

  const { ToTrahsOrDelate } = React.useContext(StateContex);


  return (
    <React.Fragment>
      {data.map((img) => (
        <div key={img.img_id} className="container-img-small img_container">
          {/* <div key={img.img_id} className={`${
          img.img_formart === "vertical" ? "container-img-small" : "container-img-big "
        }`}> */}
          <img
            className="img-all-h"
            // className={`${
            //   img.img_formart === "vertical" ? "img-all-h" : "img-all-w"
            // }`}
            src={img.src_img}
            alt={img.alt_img}
          />
          <div className="img_container_botos">
            <button onClick={() => ToTrahsOrDelate(img.img_id)} className="img_container_botos-buton">
              {/* <img src={LogoDelete} />{" "} */}
              <svg
                width="24px"
                height="24px"
                className="svg-white"
                viewBox="0 0 24 24"
              >
                <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13zM9 8h2v9H9zm4 0h2v9h-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default index;
