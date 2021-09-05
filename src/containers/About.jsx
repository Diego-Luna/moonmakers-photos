import React from "react";

// components
import Menu from "../components/Menu";
import Langind from "../components/Langind"
import Footer from "../components/Footer";

function About() {
  return (
    <React.Fragment>
      <Menu enPhotos={false} />
      <Langind />
      <Footer />
    </React.Fragment>
  );
}

export default About;
