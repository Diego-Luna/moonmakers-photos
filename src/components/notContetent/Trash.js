import React from "react";

function Trash() {
  return (
    <div className="container-secction-fotos">
      <div className="fotos-suptitle-container">
        <h2 className="fotos-suptitle">Papelera</h2>
      </div>
      <div className="center-all">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            fill="none"
          >
            <ellipse cx="100" cy="145" rx="36" ry="12" fill="#DADCE0" />
            <ellipse cx="100" cy="55" rx="48" ry="12" fill="#9AA0A6" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M52.108 55.813L64 145c0 6.627 16.118 12 36 12s36-5.373 36-12l11.892-89.187C146.22 62.06 125.417 67 100 67s-46.22-4.939-47.892-11.187z"
              fill="#DADCE0"
            />
            <mask
              id="a"
              maskUnits="userSpaceOnUse"
              x="52"
              y="55"
              width="96"
              height="102"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.108 55.813L64 145c0 6.627 16.118 12 36 12s36-5.373 36-12l11.892-89.187C146.22 62.06 125.417 67 100 67s-46.22-4.939-47.892-11.187z"
                fill="#5F6368"
              />
            </mask>
            <g clipPath="url(#clip0)" stroke="#fff" mask="url(#a)">
              <path d="M-6.773 109.396L99.293 215.462M3.834 98.79L109.9 204.856M14.44 88.183l106.066 106.066M25.047 77.577l106.066 106.066M35.653 66.97l106.066 106.066M46.26 56.363l106.066 106.066M56.867 45.757l106.066 106.066M67.473 35.15l106.066 106.066M78.08 24.544L184.146 130.61M88.686 13.937l106.066 106.066M99.293 3.33l106.066 106.066M99.293 4.038L-6.773 110.104M109.9 14.644L3.834 120.71M120.506 25.251L14.44 131.317M131.113 35.857L25.047 141.923M141.719 46.464L35.653 152.53M152.326 57.071L46.26 163.137M162.933 67.677L56.867 173.743M173.539 78.284L67.473 184.35M184.146 88.89L78.08 194.956M194.752 99.497L88.686 205.563M205.359 110.104L99.293 216.17" />
            </g>
            <defs>
              <clipPath id="clip0">
                <path
                  fill="#fff"
                  transform="rotate(-45 128.917 63.478)"
                  d="M0 0h151.5v151.5H0z"
                />
              </clipPath>
            </defs>
          </svg>
          <h3 className="container-secction-fotos_h3">No hay elementos</h3>

          <p className="container-secction-fotos_p">
            Aquí solo se muestran los elementos eliminados de MoonMakers Fotos. Se
            retiraran despues de 60 días.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trash;
