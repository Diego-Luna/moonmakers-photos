import About from "../containers/About.jsx";
import Photos from "../containers/photos.jsx";
import NotFound from "../containers/NotFound.jsx";

const routes = [
  {
    exact: true,
    path: "/",
    component: About,
  },
  {
    exact: true,
    path: "/photos",
    component: Photos,
  },
  {
    exact: true,
    path: "/photos/",
    component: Photos,
  },
  {
    exact: true,
    path: "/photos/:name",
    component: Photos,
  },
  {
    component: NotFound,
  },
];

export default routes;
