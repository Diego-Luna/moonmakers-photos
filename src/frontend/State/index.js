import React, { createContext } from "react/";
import axios from "axios";

// import React, { createContext } from "react";

const StateContex = createContext();

// creamos el estado de nuestra aplicacion
function StateProvider(props) {
  // estado de Search
  const [search, setSearch] = React.useState({
    value: "",
    cargando: false,
    error: "",
    imgs: [],
    on: false,
  });
  // estado de input, de imagen
  const [inputSubir, setInputSubir] = React.useState({
    cargando: false,
    error: "",
  });

  const [openModal, setOpenModal] = React.useState({ value: false, error: "" });

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

  const [allFotos, setAllFotos] = React.useState([]);
  // const [state, setState] = React.useState(false);

  const ChangeValueBotonsOnOff = (value) => {
    if (value === "fotos" && stateFotos.fotos.value === false) {
      // console.log("en el if de fotos");
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
      // console.log("en el if de explorar");

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
      // console.log("en el if de compartido");

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
      // console.log("en el if de favoritos");

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
      // console.log("en el if de albumes");

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
      // console.log("en el if de utilidades");

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

  const Datosfiltrados = (value) => {
    console.log("search.value: ", value);
    if (value != "") {
      fetch(`http://localhost:3000/api/photos/${value}`, {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          console.log("response.data: ", response.data);
          console.log("response => allFotos : ", allFotos);
          const filtrados = allFotos.filter((data) =>
            data.info.includes(response.data)
          );
          console.log("filtrados => ", filtrados);

          setSearch({
            value: value,
            cargando: false,
            error: "",
            imgs: filtrados,
            on: false,
          });
        })
        .catch((error) => {
          console.error("Error:", error);
          setSearch({
            value: value,
            cargando: false,
            error: "Error al traer nuestras imagenes",
            imgs: [],
            on: false,
          });
        });
    }
  };

  const CambiarValorSearch = (value) => {
    if (value != "") {
      ChangeValueBotonsOnOff("explorar");

      setSearch({
        value: value,
        cargando: true,
        error: "",
        imgs: search.imgs,
        on: false,
      });

      // fetch(`http://localhost:3000/api/photos/${value}`, {
      //   method: "GET", // or 'PUT'
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((res) => res.json())
      //   .then((response) => {
      //     console.log("los datos de la api", response.data);
      //     setSearch({
      //       value: value,
      //       cargando: false,
      //       error: "",
      //       imgs: response.data,
      //       on: false,
      //     });
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error);
      //     setSearch({
      //       value: value,
      //       cargando: false,
      //       error: "Error al traer nuestras imagenes",
      //       imgs: [],
      //       on: false,
      //     });
      //   });
    } else {
      setSearch({
        value: value,
        cargando: false,
        error: "",
        imgs: [],
        on: false,
      });
    }
  };

  const AgregarValores = (alldata) => {
    console.log("agregar datos");

    console.log("AgregarValores alldata", alldata);

    setAllFotos(alldata);
    console.log("AgregarValores => allFotos (state): =>", allFotos);

    const fotosData = alldata.filter(
      (foto) => foto.archive === false && foto.trash.value === false
    );

    const favoritosData = alldata.filter((foto) => foto.favoritos === true);
    const archiveData = alldata.filter((foto) => foto.archive === true);
    const trashData = alldata.filter((fotos) => fotos.trash.value === true);

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
        data: stateFotos.compartido.data,
      },
      favoritos: {
        value: stateFotos.favoritos.value,
        listFavoritos: favoritosData,
      },
      albumes: {
        value: stateFotos.albumes.value,
        listAlbumes: stateFotos.albumes.listAlbumes,
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

  const llamarApiDatosAll = async () => {
    console.log("conectando con la api");
    fetch("http://localhost:3000/api/photos", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log("los datos de la api", response.data);
        AgregarValores(response.data);
      });
  };

  const CambioInputSubir = async (value) => {
    setOpenModal({ value: true, error: "" });
    setInputSubir({
      cargando: true,
      error: "",
    });
    try {
      var formData = new FormData();
      var fileField = document.querySelector("input[type='file']");

      formData.append("username", "abc123");
      formData.append("avatar", fileField.files[0]);

      fetch("http://localhost:3000/api/photos", {
        method: "POST",
        body: formData,
      })
        .then((response) => console.log(response))
        .then(() =>
          setInputSubir({
            cargando: false,
            error: "",
          })
        )
        .then(() => setOpenModal({ value: false, error: "" }))
        .then(() => {
          setTimeout(() => {
            llamarApiDatosAll();
          }, 3000);
        })
        .catch((error) => {
          setInputSubir({
            cargando: false,
            error: "error, al subir la imagen",
          });
          setOpenModal({ value: true, error: "error" });
          setTimeout(() => {
            setOpenModal({ value: false, error: "" });
          }, 1000);
        });
    } catch (error) {
      console.log(error);
      setInputSubir({
        cargando: false,
        error: "error, al subir la imagen",
      });
    }
  };

  return (
    <StateContex.Provider
      value={{
        search,
        stateFotos,
        inputSubir,
        openModal,
        allFotos,
        setAllFotos,
        setOpenModal,
        CambiarValorSearch,
        ChangeValueBotonsOnOff,
        AgregarValores,
        CambioInputSubir,
        llamarApiDatosAll,
        Datosfiltrados,
      }}
    >
      {props.children}
    </StateContex.Provider>
  );
}

export { StateContex, StateProvider };
