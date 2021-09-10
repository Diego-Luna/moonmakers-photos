import React, { createContext } from "react/";
// import React, { createContext } from "react";

const StateContex = createContext();

// creamos el estado de nuestra aplicacion
function StateProvider(props) {
  // estado de Search
  const [search, setSearch] = React.useState({
    value: "",
    cargando: false,
    error: "",
  });

  // Estado de los botones del sup menu de photos
  const [stateBotons, setStateBotons] = React.useState({
    fotos: true,
    explorar: false,
    compartido: false,
    favoritos: {
      value: false,
      listFavoritos: [],
    },
    albumes: {
      value: false,
      listAlbumes: [],
    },
    utilidades: false,
    archivo: {
      value: false,
      listArchivo: [],
    },
    papelera: {
      value: false,
      listPapelera: [],
    },
  });

  const ChangeValueBotonsOnOff = (value) => {
    console.log("click");

    if (value === "fotos" && stateBotons.fotos === false) {
      console.log("en el if de fotos");
      setStateBotons({
        fotos: true,
        explorar: false,
        compartido: false,
        favoritos: {
          value: false,
          listFavoritos: stateBotons.favoritos.data,
        },
        albumes: {
          value: false,
          listAlbumes: stateBotons.albumes.data,
        },
        utilidades: false,
        archivo: {
          value: false,
          listArchivo: stateBotons.archivo.value,
        },
        papelera: {
          value: false,
          listPapelera: stateBotons.papelera.listPapelera,
        },
      });
    }

    if (value === "explorar") {
      console.log("en el if de explorar");

      setStateBotons({
        fotos: false,
        explorar: true,
        compartido: false,
        favoritos: {
          value: false,
          listFavoritos: stateBotons.favoritos.data,
        },
        albumes: {
          value: false,
          listAlbumes: stateBotons.albumes.data,
        },
        utilidades: false,
        archivo: {
          value: false,
          listArchivo: stateBotons.archivo.value,
        },
        papelera: {
          value: false,
          listPapelera: stateBotons.papelera.listPapelera,
        },
      });
    }
    if (value === "compartido") {
      console.log("en el if de compartido");

      setStateBotons({
        fotos: false,
        explorar: false,
        compartido: true,
        favoritos: {
          value: false,
          listFavoritos: stateBotons.favoritos.data,
        },
        albumes: {
          value: false,
          listAlbumes: stateBotons.albumes.data,
        },
        utilidades: false,
        archivo: {
          value: false,
          listArchivo: stateBotons.archivo.value,
        },
        papelera: {
          value: false,
          listPapelera: stateBotons.papelera.listPapelera,
        },
      });
    }
    if (value === "favoritos") {
      console.log("en el if de favoritos");

      setStateBotons({
        fotos: false,
        explorar: false,
        compartido: false,
        favoritos: {
          value: true,
          listFavoritos: stateBotons.favoritos.data,
        },
        albumes: {
          value: false,
          listAlbumes: stateBotons.albumes.data,
        },
        utilidades: false,
        archivo: {
          value: false,
          listArchivo: stateBotons.archivo.value,
        },
        papelera: {
          value: false,
          listPapelera: stateBotons.papelera.listPapelera,
        },
      });
    }
    if (value === "albumes") {
      console.log("en el if de albumes");

      setStateBotons({
        fotos: false,
        explorar: false,
        compartido: false,
        favoritos: {
          value: false,
          listFavoritos: stateBotons.favoritos.data,
        },
        albumes: {
          value: true,
          listAlbumes: stateBotons.albumes.data,
        },
        utilidades: false,
        archivo: {
          value: false,
          listArchivo: stateBotons.archivo.value,
        },
        papelera: {
          value: false,
          listPapelera: stateBotons.papelera.listPapelera,
        },
      });
    }
    if (value === "utilidades") {
      console.log("en el if de utilidades");

      setStateBotons({
        fotos: false,
        explorar: false,
        compartido: false,
        favoritos: {
          value: false,
          listFavoritos: stateBotons.favoritos.data,
        },
        albumes: {
          value: false,
          listAlbumes: stateBotons.albumes.data,
        },
        utilidades: true,
        archivo: {
          value: false,
          listArchivo: stateBotons.archivo.value,
        },
        papelera: {
          value: false,
          listPapelera: stateBotons.papelera.listPapelera,
        },
      });
    }
    if (value === "archivo") {
      console.log("en el if de archivo");

      setStateBotons({
        fotos: false,
        explorar: false,
        compartido: false,
        favoritos: {
          value: false,
          listFavoritos: stateBotons.favoritos.data,
        },
        albumes: {
          value: false,
          listAlbumes: stateBotons.albumes.data,
        },
        utilidades: false,
        archivo: {
          value: true,
          listArchivo: stateBotons.archivo.value,
        },
        papelera: {
          value: false,
          listPapelera: stateBotons.papelera.listPapelera,
        },
      });
    }
    if (value === "papelera") {
      console.log("en el if de papelera");

      setStateBotons({
        fotos: false,
        explorar: false,
        compartido: false,
        favoritos: {
          value: false,
          listFavoritos: stateBotons.favoritos.data,
        },
        albumes: {
          value: false,
          listAlbumes: stateBotons.albumes.data,
        },
        utilidades: false,
        archivo: {
          value: false,
          listArchivo: stateBotons.archivo.value,
        },
        papelera: {
          value: true,
          listPapelera: stateBotons.papelera.listPapelera,
        },
      });
    }
  };

  const CambiarValorSearch = (value) => {
    setSearch({
      value: value,
      cargando: false,
      error: "",
    });
  };

  return (
    <StateContex.Provider
      value={{
        search,
        stateBotons,
        CambiarValorSearch,
        ChangeValueBotonsOnOff,
      }}
    >
      {props.children}
    </StateContex.Provider>
  );
}

export { StateContex, StateProvider };
