import React from "react";

function Archive() {
  return (
    <div className="container-secction-fotos">
      <div className="fotos-suptitle-container">
        <h2 className="fotos-suptitle">Clean</h2>
      </div>
      <div className="center-all">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="132"
            height="132"
            fill="none"
          >
            <path d="M36 52h60l8 12H28l8-12z" fill="#F29900" />
            <path
              d="M39 64V33.37c1.09-1.025 2.326-1.831 3.634-2.124 2.518-.62 4.983.592 7.398 1.779.443.217.884.434 1.323.639 2.762 1.319 5.742 2.198 8.576 1.465 1.665-.42 3.21-1.391 4.76-2.366 1.156-.727 2.314-1.456 3.526-1.957 2.907-1.246 6.25-1.026 9.085.513 1.082.606 2.115 1.4 3.15 2.197 1.465 1.127 2.934 2.258 4.553 2.86 2.69.952 5.67.366 7.995-1.54V64H39z"
              fill="#4285F4"
            />
            <path
              d="M63.092 38a6.679 6.679 0 00-3.41.936 6.904 6.904 0 00-2.495 2.56 4.57 4.57 0 00-2.018-1.134 4.49 4.49 0 00-2.3.01c-.754.203-1.445.6-2.008 1.151a4.745 4.745 0 00-1.215 2.005h-2.519a4.075 4.075 0 00-2.918 1.24A4.293 4.293 0 0043 47.765c0 1.123.435 2.2 1.209 2.995a4.074 4.074 0 002.918 1.24h15.965c.903.012 1.799-.16 2.636-.506.838-.347 1.6-.86 2.243-1.511a7.014 7.014 0 001.501-2.282 7.159 7.159 0 000-5.4 7.013 7.013 0 00-1.5-2.281 6.809 6.809 0 00-2.243-1.511A6.666 6.666 0 0063.091 38V38z"
              fill="#fff"
            />
            <path
              d="M79.45 54.589l-7.9 7.74-13.5-13.227c-1.5-1.47-4-1.47-5.5 0L39 62.378V71h54v-8.622l-8-7.838c-1.55-1.47-4.05-1.47-5.55.049z"
              fill="#34A853"
            />
            <path
              d="M80 51c3.327 0 6-2.673 6-6s-2.673-6-6-6-6 2.673-6 6 2.673 6 6 6zM28 64h76v40H28z"
              fill="#FBBC04"
            />
            <path
              d="M54.5 70.5h23V72a3.5 3.5 0 01-3.5 3.5H58a3.5 3.5 0 01-3.5-3.5v-1.5z"
              stroke="#5F6368"
            />
          </svg>
          <h3 className="container-secction-fotos_h3">Haz limpieza</h3>

          <p className="container-secction-fotos_p">
            Los elementos archivados se guardarán aquí. Se <br /> seguirán
            mostrando en los álbumes y los resultados <br /> de busqueda
          </p>
        </div>
      </div>
    </div>
  );
}

export default Archive;
