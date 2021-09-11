import React from "react";

function Sharing() {
  return (
    <div className="container-secction-fotos">
      <div className="fotos-suptitle-container">
        <h2 className="fotos-suptitle">Compartido</h2>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="460"
        height="218"
        fill="none"
      >
        <path
          d="M361.621 34.02a20.216 20.216 0 00-17.518 10.11 13.652 13.652 0 00-22.381 5.855h-7.471A12.25 12.25 0 00302 62.243 12.257 12.257 0 00314.251 74.5h47.37a20.236 20.236 0 0014.078-6.058 20.259 20.259 0 000-28.384A20.236 20.236 0 00361.621 34v.02zM375.655 162.288h-10.231c.791-2.875 1.186-5.895 1.186-9.014 0-19.488-16.014-35.274-35.784-35.274-13.246 0-24.762 7.065-30.94 17.588-4.3-3.995-10.133-6.431-16.509-6.431-10.824 0-19.968 7.016-23.032 16.663h-13.197c-11.961 0-21.648 9.549-21.648 21.34s9.687 21.34 21.648 21.34h128.557c7.364 0 13.295-5.895 13.295-13.106-.049-7.26-5.98-13.106-13.345-13.106zM169.573 16a32.347 32.347 0 00-16.299 4.414 32.813 32.813 0 00-11.939 12.058 21.956 21.956 0 00-9.655-5.332 21.8 21.8 0 00-11.001.052 21.975 21.975 0 00-9.605 5.424 22.323 22.323 0 00-5.816 9.443H93.201a19.655 19.655 0 00-13.61 6.044A20.096 20.096 0 0074 62.029a20.096 20.096 0 005.592 13.927A19.655 19.655 0 0093.202 82h76.371c8.531-.189 16.65-3.748 22.618-9.916C198.158 65.915 201.5 57.629 201.5 49c0-8.63-3.342-16.915-9.309-23.084-5.968-6.168-14.087-9.727-22.618-9.916z"
          fill="#E8F0FE"
        />
        <path
          d="M293.621 43.043l-62.715 91.077-44.564-64.266 107.279-26.811z"
          fill="#4285F4"
        />
        <path
          d="M208.25 100.75l82.998-56.14"
          stroke="#3C4043"
          strokeMiterlimit="10"
        />
        <path
          d="M188.666 195.107s16.477-22.903-2.87-34.282c-21.948-12.865-66.955 13.304-69.918-7.873-2.251-16.163 36.583-5.421 38.322-20.305 1.813-15.527-34.376-23.494-24.755-37.715 9.457-13.971 47.641 21.241 74.162 8.613"
          stroke="#9AA0A6"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeDasharray="0.01 6"
        />
      </svg>
      <p className="container-secction-fotos_p">
        Estamos organizando tus fotos para que las encuentres más rápidamente
      </p>
    </div>
  );
}

export default Sharing;
