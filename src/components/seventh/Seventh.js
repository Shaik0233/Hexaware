import React from 'react'
import Eight from "../eight/Eight"
import "../seventh/Seventh.css"

function Seventh() {
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
        },
        {
          title: "Pizza",
          text: "Try our cheesy and crispy pizza.",
          image: "/images/food_bg.jpg",
          cardClass: "custom-card landing-page-card",
          imgClass: "hover-image-disable"
        },
       
        
      ];
  return (
    <div className="container background">
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

  )
}

export default Seventh
