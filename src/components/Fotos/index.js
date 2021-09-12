import React from "react";

import "../../assets/styles/components/item.css";

function index({ data }) {
  return (
    <React.Fragment>
      {data.map((img) => (
        <div key={img.img_id} className={`${
          img.img_formart === "vertical" ? "container-img-small" : "container-img-big "
        }`}>
          <img
            className={`${
              img.img_formart === "vertical" ? "img-all-h" : "img-all-w"
            }`}
            src={img.src_img}
            alt={img.alt_img}
          />
        </div>
      ))}
    </React.Fragment>
  );
}

export default index;
