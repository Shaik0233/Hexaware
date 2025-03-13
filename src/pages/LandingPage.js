import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BasicExample from "../components/navbar/Navbar";
import BackgroundWithDivs from "../components/banner/Banner";
import OfferSlider from "../components/OfferSlider"; 
import CustomLayout from "../components/third/Title";
import Fourth from "../components/fourth/Fourth";
import Fifth from "../components/fifth/Fifth";

function LandingPage() {
  return (
    <div>
      <BasicExample />
      <BackgroundWithDivs />
      <OfferSlider />
      <CustomLayout/>
      <Fourth/>
      <Fifth/>
    </div>
  );
}

export default LandingPage;
