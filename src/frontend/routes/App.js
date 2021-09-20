import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StateContex } from "../state";

import About from "../containers/About.jsx";
import Login from "../containers/Login.jsx";
import Photos from "../containers/photos.jsx";
import NotFound from "../containers/NotFound.jsx";

function App() {
  const { AgregarValores, llamarApiDatosAll } = React.useContext(StateContex);

  React.useEffect(() => {
    llamarApiDatosAll();
    // fetch("http://localhost:3000/api/photos", {
    //   method: "GET", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .catch((error) => console.error("Error:", error))
    //   .then((response) =>
    //     console.log("Success:", AgregarValores(response.data))
    //   );

    // AgregarValores([
    //   {
    //     id_user: "1010101",
    //     img_id: "01",
    //     src_img:
    //       "https://i.pinimg.com/564x/b3/55/a2/b355a2a9a7aa64b3daad02d334d27e6e.jpg",
    //     favoritos: true,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "vertical",
    //     info: ["chica"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "02",
    //     src_img:
    //       "https://i.pinimg.com/564x/b3/55/a2/b355a2a9a7aa64b3daad02d334d27e6e.jpg",
    //     favoritos: false,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "vertical",
    //     info: ["chica"],
    //     trash: {
    //       value: true,
    //       data: "2021-10-12",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "03",
    //     src_img:
    //       "https://i.pinimg.com/564x/b3/55/a2/b355a2a9a7aa64b3daad02d334d27e6e.jpg",
    //     favoritos: false,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "vertical",
    //     info: ["chica"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "04",
    //     src_img:
    //       "https://i.pinimg.com/564x/b3/55/a2/b355a2a9a7aa64b3daad02d334d27e6e.jpg",
    //     favoritos: false,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "vertical",
    //     info: ["chica"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "05",
    //     src_img:
    //       "https://i.pinimg.com/564x/b3/55/a2/b355a2a9a7aa64b3daad02d334d27e6e.jpg",
    //     favoritos: false,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "vertical",
    //     info: ["chica"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "06",
    //     src_img:
    //       "https://i.pinimg.com/564x/b3/55/a2/b355a2a9a7aa64b3daad02d334d27e6e.jpg",
    //     favoritos: false,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "vertical",
    //     info: ["chica"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "07",
    //     src_img:
    //       "https://i.pinimg.com/564x/b3/55/a2/b355a2a9a7aa64b3daad02d334d27e6e.jpg",
    //     favoritos: false,
    //     archive: true,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "vertical",
    //     info: ["chica"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "08",
    //     src_img:
    //       "https://i.pinimg.com/564x/41/8b/63/418b63bab5df836381063597507e12d0.jpg",
    //     favoritos: true,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "vertical",
    //     info: ["chico"],
    //     trash: {
    //       value: true,
    //       data: "2021-10-12",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "09",
    //     src_img:
    //       "https://i.pinimg.com/564x/41/8b/63/418b63bab5df836381063597507e12d0.jpg",
    //     favoritos: false,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "vertical",
    //     info: ["chico"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "10",
    //     src_img:
    //       "https://i.pinimg.com/564x/41/8b/63/418b63bab5df836381063597507e12d0.jpg",
    //     favoritos: false,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "vertical",
    //     info: ["chico"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "11",
    //     src_img:
    //       "https://i.pinimg.com/564x/41/8b/63/418b63bab5df836381063597507e12d0.jpg",
    //     favoritos: false,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "vertical",
    //     info: ["chico"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "12",
    //     src_img:
    //       "https://i.pinimg.com/564x/41/8b/63/418b63bab5df836381063597507e12d0.jpg",
    //     favoritos: false,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "vertical",
    //     info: ["chico"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "13",
    //     src_img:
    //       "https://i.pinimg.com/564x/41/8b/63/418b63bab5df836381063597507e12d0.jpg",
    //     favoritos: false,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "vertical",
    //     info: ["chico"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "14",
    //     src_img:
    //       "https://i.pinimg.com/564x/41/8b/63/418b63bab5df836381063597507e12d0.jpg",
    //     favoritos: false,
    //     archive: true,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "vertical",
    //     info: ["chico"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "15",
    //     src_img:
    //       "https://i.pinimg.com/564x/7c/25/4d/7c254dac1db9171339307d64f73133e0.jpg",
    //     favoritos: true,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "horizontal",
    //     info: ["chico"],
    //     trash: {
    //       value: true,
    //       data: "2021-10-12",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "16",
    //     src_img:
    //       "https://i.pinimg.com/564x/7c/25/4d/7c254dac1db9171339307d64f73133e0.jpg",
    //     favoritos: false,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "horizontal",
    //     info: ["chico"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "17",
    //     src_img:
    //       "https://i.pinimg.com/564x/7c/25/4d/7c254dac1db9171339307d64f73133e0.jpg",
    //     favoritos: false,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "horizontal",
    //     info: ["chico"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "18",
    //     src_img:
    //       "https://i.pinimg.com/564x/7c/25/4d/7c254dac1db9171339307d64f73133e0.jpg",
    //     favoritos: false,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "horizontal",
    //     info: ["chico"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "19",
    //     src_img:
    //       "https://i.pinimg.com/564x/7c/25/4d/7c254dac1db9171339307d64f73133e0.jpg",
    //     favoritos: false,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "horizontal",
    //     info: ["chico"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "20",
    //     src_img:
    //       "https://i.pinimg.com/564x/7c/25/4d/7c254dac1db9171339307d64f73133e0.jpg",
    //     favoritos: false,
    //     archive: false,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "horizontal",
    //     info: ["chico"],
    //     trash: {
    //       value: true,
    //       data: "2021-10-12",
    //     },
    //   },
    //   {
    //     id_user: "1010101",
    //     img_id: "21",
    //     src_img:
    //       "https://i.pinimg.com/564x/7c/25/4d/7c254dac1db9171339307d64f73133e0.jpg",
    //     favoritos: false,
    //     archive: true,
    //     alt_img: "iimagen de anabelt chase",
    //     img_formart: "horizontal",
    //     info: ["chico"],
    //     trash: {
    //       value: false,
    //       data: "",
    //     },
    //   },
    // ]);
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/photos/" component={Photos} />
        <Route exact path="/photos/:name" component={Photos} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
