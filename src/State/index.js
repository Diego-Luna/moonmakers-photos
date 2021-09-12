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
  const [stateFotos, setStateFotos] = React.useState({
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
    if (value === "fotos" && stateFotos.fotos.value === false) {
      console.log("en el if de fotos");
      setStateFotos({
        fotos: {
          value: true,
          alldata: stateFotos.fotos.alldata,
        },
        explorar: {
          value: false,
          data: stateFotos.explorar.data,
        },
        compartido: {
          value: false,
          data: stateFotos.compartido.data,
        },
        favoritos: {
          value: false,
          listFavoritos: stateFotos.favoritos.listFavoritos,
        },
        albumes: {
          value: false,
          listAlbumes: stateFotos.albumes.listAlbumes,
        },
        utilidades: {
          value: false,
          data: stateFotos.utilidades.data,
        },
        archivo: {
          value: false,
          listArchivo: stateFotos.archivo.listArchivo,
        },
        papelera: {
          value: false,
          listPapelera: stateFotos.papelera.listPapelera,
        },
      });
    }

    if (value === "explorar") {
      console.log("en el if de explorar");

      setStateFotos({
        fotos: {
          value: false,
          alldata: stateFotos.fotos.alldata,
        },
        explorar: {
          value: true,
          data: stateFotos.explorar.data,
        },
        compartido: {
          value: false,
          data: stateFotos.compartido.data,
        },
        favoritos: {
          value: false,
          listFavoritos: stateFotos.favoritos.listFavoritos,
        },
        albumes: {
          value: false,
          listAlbumes: stateFotos.albumes.listAlbumes,
        },
        utilidades: {
          value: false,
          data: stateFotos.utilidades.data,
        },
        archivo: {
          value: false,
          listArchivo: stateFotos.archivo.listArchivo,
        },
        papelera: {
          value: false,
          listPapelera: stateFotos.papelera.listPapelera,
        },
      });
    }
    if (value === "compartido") {
      console.log("en el if de compartido");

      setStateFotos({
        fotos: {
          value: false,
          alldata: stateFotos.fotos.alldata,
        },
        explorar: {
          value: false,
          data: stateFotos.explorar.data,
        },
        compartido: {
          value: true,
          data: stateFotos.compartido.data,
        },
        favoritos: {
          value: false,
          listFavoritos: stateFotos.favoritos.listFavoritos,
        },
        albumes: {
          value: false,
          listAlbumes: stateFotos.albumes.listAlbumes,
        },
        utilidades: {
          value: false,
          data: stateFotos.utilidades.data,
        },
        archivo: {
          value: false,
          listArchivo: stateFotos.archivo.listArchivo,
        },
        papelera: {
          value: false,
          listPapelera: stateFotos.papelera.listPapelera,
        },
      });
    }
    if (value === "favoritos") {
      console.log("en el if de favoritos");

      setStateFotos({
        fotos: {
          value: false,
          alldata: stateFotos.fotos.alldata,
        },
        explorar: {
          value: false,
          data: stateFotos.explorar.data,
        },
        compartido: {
          value: false,
          data: stateFotos.compartido.data,
        },
        favoritos: {
          value: true,
          listFavoritos: stateFotos.favoritos.listFavoritos,
        },
        albumes: {
          value: false,
          listAlbumes: stateFotos.albumes.listAlbumes,
        },
        utilidades: {
          value: false,
          data: stateFotos.utilidades.data,
        },
        archivo: {
          value: false,
          listArchivo: stateFotos.archivo.listArchivo,
        },
        papelera: {
          value: false,
          listPapelera: stateFotos.papelera.listPapelera,
        },
      });
    }
    if (value === "albumes") {
      console.log("en el if de albumes");

      setStateFotos({
        fotos: {
          value: false,
          alldata: stateFotos.fotos.alldata,
        },
        explorar: {
          value: false,
          data: stateFotos.explorar.data,
        },
        compartido: {
          value: false,
          data: stateFotos.compartido.data,
        },
        favoritos: {
          value: false,
          listFavoritos: stateFotos.favoritos.listFavoritos,
        },
        albumes: {
          value: true,
          listAlbumes: stateFotos.albumes.listAlbumes,
        },
        utilidades: {
          value: false,
          data: stateFotos.utilidades.data,
        },
        archivo: {
          value: false,
          listArchivo: stateFotos.archivo.listArchivo,
        },
        papelera: {
          value: false,
          listPapelera: stateFotos.papelera.listPapelera,
        },
      });
    }
    if (value === "utilidades") {
      console.log("en el if de utilidades");

      setStateFotos({
        fotos: {
          value: false,
          alldata: stateFotos.fotos.alldata,
        },
        explorar: {
          value: false,
          data: stateFotos.explorar.data,
        },
        compartido: {
          value: false,
          data: stateFotos.compartido.data,
        },
        favoritos: {
          value: false,
          listFavoritos: stateFotos.favoritos.listFavoritos,
        },
        albumes: {
          value: false,
          listAlbumes: stateFotos.albumes.listAlbumes,
        },
        utilidades: {
          value: true,
          data: stateFotos.utilidades.data,
        },
        archivo: {
          value: false,
          listArchivo: stateFotos.archivo.listArchivo,
        },
        papelera: {
          value: false,
          listPapelera: stateFotos.papelera.listPapelera,
        },
      });
    }
    if (value === "archivo") {
      console.log("en el if de archivo");

      setStateFotos({
        fotos: {
          value: false,
          alldata: stateFotos.fotos.alldata,
        },
        explorar: {
          value: false,
          data: stateFotos.explorar.data,
        },
        compartido: {
          value: false,
          data: stateFotos.compartido.data,
        },
        favoritos: {
          value: false,
          listFavoritos: stateFotos.favoritos.listFavoritos,
        },
        albumes: {
          value: false,
          listAlbumes: stateFotos.albumes.listAlbumes,
        },
        utilidades: {
          value: false,
          data: stateFotos.utilidades.data,
        },
        archivo: {
          value: true,
          listArchivo: stateFotos.archivo.listArchivo,
        },
        papelera: {
          value: false,
          listPapelera: stateFotos.papelera.listPapelera,
        },
      });
    }
    if (value === "papelera") {
      console.log("en el if de papelera");

      setStateFotos({
        fotos: {
          value: false,
          alldata: stateFotos.fotos.alldata,
        },
        explorar: {
          value: false,
          data: stateFotos.explorar.data,
        },
        compartido: {
          value: false,
          data: stateFotos.compartido.data,
        },
        favoritos: {
          value: false,
          listFavoritos: stateFotos.favoritos.listFavoritos,
        },
        albumes: {
          value: false,
          listAlbumes: stateFotos.albumes.listAlbumes,
        },
        utilidades: {
          value: false,
          data: stateFotos.utilidades.data,
        },
        archivo: {
          value: false,
          listArchivo: stateFotos.archivo.listArchivo,
        },
        papelera: {
          value: true,
          listPapelera: stateFotos.papelera.listPapelera,
        },
      });
    }

    console.log("value :", value);
    console.log("stateFotos: ", stateFotos);
  };

  const CambiarValorSearch = (value) => {
    setSearch({
      value: value,
      cargando: false,
      error: "",
    });
  };

  const AgregarValores = (alldata) => {
    const fotosData = alldata.filter((foto) => (foto.archive === false && foto.trash.value === false ));

    const favoritosData = alldata.filter((foto) => foto.favoritos === true);
    const archiveData = alldata.filter((foto) => foto.archive === true);
    const trashData = alldata.filter((fotos) => fotos.trash.value === true );

    setStateFotos({
      fotos: {
        value: stateFotos.fotos.value,
        alldata: fotosData,
      },
      explorar: {
        value: stateFotos.explorar.value,
        data: [],
      },
      compartido: {
        value: stateFotos.compartido.value,
        data: [],
      },
      favoritos: {
        value: stateFotos.favoritos.value,
        listFavoritos: favoritosData,
      },
      albumes: {
        value: stateFotos.albumes.value,
        listAlbumes: [],
      },
      utilidades: {
        value: stateFotos.utilidades.value,
        data: [],
      },
      archivo: {
        value: stateFotos.archivo.value,
        listArchivo: archiveData,
      },
      papelera: {
        value: stateFotos.papelera.value,
        listPapelera: trashData,
      },
    });
  };

  return (
    <StateContex.Provider
      value={{
        search,
        stateFotos,
        CambiarValorSearch,
        ChangeValueBotonsOnOff,
        AgregarValores,
      }}
    >
      {props.children}
    </StateContex.Provider>
  );
}

export { StateContex, StateProvider };
