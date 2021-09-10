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
    fotos: {
      value: true,
      alldata: [],
    },
    explorar: {
      value: false,
      data: [],
    },
    compartido: {
      value: false,
      data: [],
    },
    favoritos: {
      value: false,
      listFavoritos: [],
    },
    albumes: {
      value: false,
      listAlbumes: [],
    },
    utilidades: {
      value: false,
      data: [],
    },
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
    if (value === "fotos" && stateBotons.fotos === false) {
      console.log("en el if de fotos");
      setStateBotons({
        fotos: {
          value: true,
          alldata: stateBotons.fotos.alldata,
        },
        explorar: {
          value: false,
          data: stateBotons.explorar.data,
        },
        compartido: {
          value: false,
          data: stateBotons.compartido.data,
        },
        favoritos: {
          value: false,
          listFavoritos: stateBotons.favoritos.listFavoritos,
        },
        albumes: {
          value: false,
          listAlbumes: stateBotons.albumes.listAlbumes,
        },
        utilidades: {
          value: false,
          data: stateBotons.utilidades.data,
        },
        archivo: {
          value: false,
          listArchivo: stateBotons.archivo.listArchivo,
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
        fotos: {
          value: false,
          alldata: stateBotons.fotos.alldata,
        },
        explorar: {
          value: true,
          data: stateBotons.explorar.data,
        },
        compartido: {
          value: false,
          data: stateBotons.compartido.data,
        },
        favoritos: {
          value: false,
          listFavoritos: stateBotons.favoritos.listFavoritos,
        },
        albumes: {
          value: false,
          listAlbumes: stateBotons.albumes.listAlbumes,
        },
        utilidades: {
          value: false,
          data: stateBotons.utilidades.data,
        },
        archivo: {
          value: false,
          listArchivo: stateBotons.archivo.listArchivo,
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
        fotos: {
          value: false,
          alldata: stateBotons.fotos.alldata,
        },
        explorar: {
          value: false,
          data: stateBotons.explorar.data,
        },
        compartido: {
          value: true,
          data: stateBotons.compartido.data,
        },
        favoritos: {
          value: false,
          listFavoritos: stateBotons.favoritos.listFavoritos,
        },
        albumes: {
          value: false,
          listAlbumes: stateBotons.albumes.listAlbumes,
        },
        utilidades: {
          value: false,
          data: stateBotons.utilidades.data,
        },
        archivo: {
          value: false,
          listArchivo: stateBotons.archivo.listArchivo,
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
        fotos: {
          value: false,
          alldata: stateBotons.fotos.alldata,
        },
        explorar: {
          value: false,
          data: stateBotons.explorar.data,
        },
        compartido: {
          value: false,
          data: stateBotons.compartido.data,
        },
        favoritos: {
          value: true,
          listFavoritos: stateBotons.favoritos.listFavoritos,
        },
        albumes: {
          value: false,
          listAlbumes: stateBotons.albumes.listAlbumes,
        },
        utilidades: {
          value: false,
          data: stateBotons.utilidades.data,
        },
        archivo: {
          value: false,
          listArchivo: stateBotons.archivo.listArchivo,
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
        fotos: {
          value: false,
          alldata: stateBotons.fotos.alldata,
        },
        explorar: {
          value: false,
          data: stateBotons.explorar.data,
        },
        compartido: {
          value: false,
          data: stateBotons.compartido.data,
        },
        favoritos: {
          value: false,
          listFavoritos: stateBotons.favoritos.listFavoritos,
        },
        albumes: {
          value: true,
          listAlbumes: stateBotons.albumes.listAlbumes,
        },
        utilidades: {
          value: false,
          data: stateBotons.utilidades.data,
        },
        archivo: {
          value: false,
          listArchivo: stateBotons.archivo.listArchivo,
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
        fotos: {
          value: false,
          alldata: stateBotons.fotos.alldata,
        },
        explorar: {
          value: false,
          data: stateBotons.explorar.data,
        },
        compartido: {
          value: false,
          data: stateBotons.compartido.data,
        },
        favoritos: {
          value: false,
          listFavoritos: stateBotons.favoritos.listFavoritos,
        },
        albumes: {
          value: false,
          listAlbumes: stateBotons.albumes.listAlbumes,
        },
        utilidades: {
          value: true,
          data: stateBotons.utilidades.data,
        },
        archivo: {
          value: false,
          listArchivo: stateBotons.archivo.listArchivo,
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
        fotos: {
          value: false,
          alldata: stateBotons.fotos.alldata,
        },
        explorar: {
          value: false,
          data: stateBotons.explorar.data,
        },
        compartido: {
          value: false,
          data: stateBotons.compartido.data,
        },
        favoritos: {
          value: false,
          listFavoritos: stateBotons.favoritos.listFavoritos,
        },
        albumes: {
          value: false,
          listAlbumes: stateBotons.albumes.listAlbumes,
        },
        utilidades: {
          value: false,
          data: stateBotons.utilidades.data,
        },
        archivo: {
          value: true,
          listArchivo: stateBotons.archivo.listArchivo,
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
        fotos: {
          value: false,
          alldata: stateBotons.fotos.alldata,
        },
        explorar: {
          value: false,
          data: stateBotons.explorar.data,
        },
        compartido: {
          value: false,
          data: stateBotons.compartido.data,
        },
        favoritos: {
          value: false,
          listFavoritos: stateBotons.favoritos.listFavoritos,
        },
        albumes: {
          value: false,
          listAlbumes: stateBotons.albumes.listAlbumes,
        },
        utilidades: {
          value: false,
          data: stateBotons.utilidades.data,
        },
        archivo: {
          value: false,
          listArchivo: stateBotons.archivo.listArchivo,
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
