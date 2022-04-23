import React from "react";
import Navbar from "./IndexNavbar";
import Header from "./IndexHeader";
import Feature from "./IndexFeature";
import Offer from "./IndexOffer";
import About from "./IndexAbout";
import Contact from "./IndexContact";

function IndexMain() {
  return (
    <div className='index'>
    <div className="App">

      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
    </div>
    </div>
  );
}

export default IndexMain;
