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
  });
  // const [stateBotons, setStateBotons] = React.useState({
  //   fotos: true,
  //   explorar: false,
  //   compartido: false,
  //   favoritos: {
  //     value: false,
  //     listFavoritos: [],
  //   },
  //   albumes: {
  //     value: false,
  //     listAlbumes: [],
  //   },
  //   utilidades: false,
  //   archivo: {
  //     value: false,
  //     listArchivo: [],
  //   },
  //   papelera: {
  //     value: false,
  //     listPapelera: [],
  //   },
  // });

  const ChangeValueBotonsOnOff = (value) => {
    console.log("click");

    console.log(value);

    // let copiaEstadoValores = stateBotons;

    // switch (value) {
    //   case "fotos":
    //     copiaEstadoValores.fotos = true;
    //     copiaEstadoValores.explorar = false;
    //     copiaEstadoValores.compartido = false;
    //     copiaEstadoValores.favoritos.value = false;
    //     copiaEstadoValores.albumes.value = false;
    //     copiaEstadoValores.utilidades = false;
    //     copiaEstadoValores.archivo = false;
    //     copiaEstadoValores.papelera.value = false;

    //     break;

    //   case "explorar":
    //     copiaEstadoValores.fotos = false;
    //     copiaEstadoValores.explorar = true;
    //     copiaEstadoValores.compartido = false;
    //     copiaEstadoValores.favoritos.value = false;
    //     copiaEstadoValores.albumes.value = false;
    //     copiaEstadoValores.utilidades = false;
    //     copiaEstadoValores.archivo = false;
    //     copiaEstadoValores.papelera.value = false;
    //     break;

    //   case "compartido":
    //     copiaEstadoValores.fotos = false;
    //     copiaEstadoValores.explorar = false;
    //     copiaEstadoValores.compartido = true;
    //     copiaEstadoValores.favoritos.value = false;
    //     copiaEstadoValores.albumes.value = false;
    //     copiaEstadoValores.utilidades = false;
    //     copiaEstadoValores.archivo = false;
    //     copiaEstadoValores.papelera.value = false;

    //     break;

    //   case "favoritos":
    //     copiaEstadoValores.fotos = false;
    //     copiaEstadoValores.explorar = false;
    //     copiaEstadoValores.compartido = false;
    //     copiaEstadoValores.favoritos.value = true;
    //     copiaEstadoValores.albumes.value = false;
    //     copiaEstadoValores.utilidades = false;
    //     copiaEstadoValores.archivo = false;
    //     copiaEstadoValores.papelera.value = false;
    //     break;

    //   case "albumes":
    //     copiaEstadoValores.fotos = false;
    //     copiaEstadoValores.explorar = false;
    //     copiaEstadoValores.compartido = false;
    //     copiaEstadoValores.favoritos.value = false;
    //     copiaEstadoValores.albumes.value = true;
    //     copiaEstadoValores.utilidades = false;
    //     copiaEstadoValores.archivo = false;
    //     copiaEstadoValores.papelera.value = false;
    //     break;

    //   case "utilidades":
    //     copiaEstadoValores.fotos = false;
    //     copiaEstadoValores.explorar = false;
    //     copiaEstadoValores.compartido = false;
    //     copiaEstadoValores.favoritos.value = false;
    //     copiaEstadoValores.albumes.value = false;
    //     copiaEstadoValores.utilidades = true;
    //     copiaEstadoValores.archivo = false;
    //     copiaEstadoValores.papelera.value = false;
    //     break;

    //   case "archivo":
    //     copiaEstadoValores.fotos = false;
    //     copiaEstadoValores.explorar = false;
    //     copiaEstadoValores.compartido = false;
    //     copiaEstadoValores.favoritos.value = false;
    //     copiaEstadoValores.albumes.value = false;
    //     copiaEstadoValores.utilidades = false;
    //     copiaEstadoValores.archivo = true;
    //     copiaEstadoValores.papelera.value = false;
    //     break;

    //   case "papelera":
    //     copiaEstadoValores.fotos = false;
    //     copiaEstadoValores.explorar = false;
    //     copiaEstadoValores.compartido = false;
    //     copiaEstadoValores.favoritos.value = false;
    //     copiaEstadoValores.albumes.value = false;
    //     copiaEstadoValores.utilidades = false;
    //     copiaEstadoValores.archivo = false;
    //     copiaEstadoValores.papelera.value = true;
    //     break;

    //   default:
    //     break;
    // }

    // console.log("copiaEstadoValores", copiaEstadoValores);

    // // setStateBotons(value);
    // if (value === "fotos" && stateBotons.fotos === "false") {
    // setStateBotons({
    //   fotos: true,
    //   explorar: false,
    // });

    // } else if (value === "explorar") {
    //   setStateBotons({
    //     fotos: false,
    //     explorar: true,
    //   });
    // }

    console.log("-stateBotons: ", stateBotons);
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
