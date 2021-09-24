import React from "react";

// components
import Menu from "../components/menu";
import Langind from "../components/langind";
import Footer from "../components/footer";

import { StateContex } from "../state";


function About() {


  // const { search } = React.useContext(StateContex);


  // console.log("search: ");
  // console.log(search);

  return (
    <React.Fragment>
      <Menu enPhotos={false} />
      <Langind />
      <Footer />
    </React.Fragment>
  );
}

export default About;
