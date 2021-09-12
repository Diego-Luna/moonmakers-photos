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
      alldata: [
        {
          id_user: "1010101",
          img_id: "01",
          src_img:
            "https://i.pinimg.com/564x/b3/55/a2/b355a2a9a7aa64b3daad02d334d27e6e.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "vertical",
          info: ["chica"],
        },
        {
          id_user: "1010101",
          img_id: "02",
          src_img:
            "https://i.pinimg.com/564x/b3/55/a2/b355a2a9a7aa64b3daad02d334d27e6e.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "vertical",
          info: ["chica"],
        },
        {
          id_user: "1010101",
          img_id: "03",
          src_img:
            "https://i.pinimg.com/564x/b3/55/a2/b355a2a9a7aa64b3daad02d334d27e6e.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "vertical",
          info: ["chica"],
        },
        {
          id_user: "1010101",
          img_id: "04",
          src_img:
            "https://i.pinimg.com/564x/b3/55/a2/b355a2a9a7aa64b3daad02d334d27e6e.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "vertical",
          info: ["chica"],
        },
        {
          id_user: "1010101",
          img_id: "05",
          src_img:
            "https://i.pinimg.com/564x/b3/55/a2/b355a2a9a7aa64b3daad02d334d27e6e.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "vertical",
          info: ["chica"],
        },
        {
          id_user: "1010101",
          img_id: "06",
          src_img:
            "https://i.pinimg.com/564x/b3/55/a2/b355a2a9a7aa64b3daad02d334d27e6e.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "vertical",
          info: ["chica"],
        },
        {
          id_user: "1010101",
          img_id: "07",
          src_img:
            "https://i.pinimg.com/564x/b3/55/a2/b355a2a9a7aa64b3daad02d334d27e6e.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "vertical",
          info: ["chica"],
        },
        {
          id_user: "1010101",
          img_id: "08",
          src_img:
            "https://i.pinimg.com/564x/41/8b/63/418b63bab5df836381063597507e12d0.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "vertical",
          info: ["chico"],
        },
        {
          id_user: "1010101",
          img_id: "09",
          src_img:
            "https://i.pinimg.com/564x/41/8b/63/418b63bab5df836381063597507e12d0.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "vertical",
          info: ["chico"],
        },
        {
          id_user: "1010101",
          img_id: "10",
          src_img:
            "https://i.pinimg.com/564x/41/8b/63/418b63bab5df836381063597507e12d0.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "vertical",
          info: ["chico"],
        },
        {
          id_user: "1010101",
          img_id: "11",
          src_img:
            "https://i.pinimg.com/564x/41/8b/63/418b63bab5df836381063597507e12d0.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "vertical",
          info: ["chico"],
        },
        {
          id_user: "1010101",
          img_id: "12",
          src_img:
            "https://i.pinimg.com/564x/41/8b/63/418b63bab5df836381063597507e12d0.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "vertical",
          info: ["chico"],
        },
        {
          id_user: "1010101",
          img_id: "13",
          src_img:
            "https://i.pinimg.com/564x/41/8b/63/418b63bab5df836381063597507e12d0.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "vertical",
          info: ["chico"],
        },
        {
          id_user: "1010101",
          img_id: "14",
          src_img:
            "https://i.pinimg.com/564x/41/8b/63/418b63bab5df836381063597507e12d0.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "vertical",
          info: ["chico"],
        },
        {
          id_user: "1010101",
          img_id: "15",
          src_img:
            "https://i.pinimg.com/564x/7c/25/4d/7c254dac1db9171339307d64f73133e0.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "horizontal",
          info: ["chico"],
        },
        {
          id_user: "1010101",
          img_id: "16",
          src_img:
            "https://i.pinimg.com/564x/7c/25/4d/7c254dac1db9171339307d64f73133e0.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "horizontal",
          info: ["chico"],
        },
        {
          id_user: "1010101",
          img_id: "17",
          src_img:
            "https://i.pinimg.com/564x/7c/25/4d/7c254dac1db9171339307d64f73133e0.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "horizontal",
          info: ["chico"],
        },
        {
          id_user: "1010101",
          img_id: "18",
          src_img:
            "https://i.pinimg.com/564x/7c/25/4d/7c254dac1db9171339307d64f73133e0.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "horizontal",
          info: ["chico"],
        },
        {
          id_user: "1010101",
          img_id: "19",
          src_img:
            "https://i.pinimg.com/564x/7c/25/4d/7c254dac1db9171339307d64f73133e0.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "horizontal",
          info: ["chico"],
        },
        {
          id_user: "1010101",
          img_id: "20",
          src_img:
            "https://i.pinimg.com/564x/7c/25/4d/7c254dac1db9171339307d64f73133e0.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "horizontal",
          info: ["chico"],
        },
        {
          id_user: "1010101",
          img_id: "21",
          src_img:
            "https://i.pinimg.com/564x/7c/25/4d/7c254dac1db9171339307d64f73133e0.jpg",
          alt_img: "iimagen de anabelt chase",
          img_formart: "horizontal",
          info: ["chico"],
        },
      ],
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

  return (
    <StateContex.Provider
      value={{
        search,
        stateFotos,
        CambiarValorSearch,
        ChangeValueBotonsOnOff,
      }}
    >
      {props.children}
    </StateContex.Provider>
  );
}

export { StateContex, StateProvider };
