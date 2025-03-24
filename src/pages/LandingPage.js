import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BasicExample from "../components/navbar/Navbar";
import BackgroundWithDivs from "../components/banner/Banner";
import OfferSlider from "../components/OfferSlider"; 
import CustomLayout from "../components/third/Title";
import Fourth from "../components/fourth/Fourth";
import Fifth from "../components/fifth/Fifth";
import Sixth from "../components/six/Sixth";
import Nine from "../components/nine/Nine";
import "../pages/LandingPage.css";
// import Api from "../components/Api";
import Seventh from "../components/seventh/Seventh";
import FetchData from "../FetchData";
import Fetch from "../FetchAxios"
import Fetching from "../Fetching"
import Footer from "../components/footer/Footer"
import OpportunityMain from "../components/opportunity/OpportunityMain"
import RealSection from "../components/real/RealComp";
import NewsMain from "../components/news/NewsMain"
import NineMain from "../components/nine/NineMain"
function LandingPage() {
  return (
    <div>
      <BasicExample />
      <BackgroundWithDivs />
      <NineMain/>
      {/* <OfferSlider /> */}
      <CustomLayout />
      <Fourth />
      <Fifth />
      <Sixth />
      {/* <Seventh/> */}
      <RealSection/>
      <NewsMain/>
      <OpportunityMain/>
      <Footer/>
      
      {/* <FetchData/> */}
      {/* <Fetch/>
      <Fetching/> */}
      
    </div>
    
  );
}

export default LandingPage;
