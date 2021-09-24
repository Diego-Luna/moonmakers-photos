import About from "../containers/about.jsx";
import Photos from "../containers/photos.jsx";
import NotFound from "../containers/notfound.jsx";

const routes = [
  {
    exact: true,
    path: "/",
    component: About,
  },
  // {
  //   exact: true,
  //   path: "/photos",
  //   component: Photos,
  // },
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
