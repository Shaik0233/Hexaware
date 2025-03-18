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
import Eight from "../components/eight/Eight";
import "../pages/LandingPage.css";

import FetchPhotos from "../components/ten/Ten"

const cardData = [
  {
    title: "Delicious Pizza",
    text: "Try our cheesy and crispy pizza.",
    image: "/images/food_bg.jpg",
    cardClass: "custom-card landing-page-card",
    imgClass: "hover-image-disable"
  },
  {
    title: "Delicious",
    text: "Try our cheesy and crispy pizza.",
    image: "/images/food_bg.jpg",
    cardClass: "custom-card landing-page-card",
    imgClass: "hover-image-disable"
  },
  {
    title: "Pizza",
    text: "Try our cheesy and crispy pizza.",
    image: "/images/food_bg.jpg",
    cardClass: "custom-card landing-page-card",
    imgClass: "hover-image-disable"
  }
];

function LandingPage() {
  return (
    <div>
      <BasicExample />
      <BackgroundWithDivs />
      <OfferSlider />
      <CustomLayout />
      <Fourth />
      <Fifth />
      <Sixth />
      <Nine />

      <div className="container">
  <div className="row">
    {cardData.map((card, index) => (
      <div key={index} className="col-md-3"> {/* Adjust column size as needed */}
        <Eight
          title={card.title}
          text={card.text}
          image={card.image}
          cardClass={card.cardClass}
          imgClass={card.imgClass}
        />
      </div>
    ))}
  </div>
</div>


      <FetchPhotos/>
    </div>
    
  );
}

export default LandingPage;
