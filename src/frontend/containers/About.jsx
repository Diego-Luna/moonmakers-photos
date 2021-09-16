import React from "react";

// components
import Menu from "../components/Menu";
import Langind from "../components/Langind";
import Footer from "../components/Footer";

import { StateContex } from "../state";


function About() {


  const { search } = React.useContext(StateContex);


  console.log("search: ");
  console.log(search);

  return (
    <React.Fragment>
      <Menu enPhotos={false} />
      <Langind />
      <Footer />
    </React.Fragment>
  );
}

export default About;
