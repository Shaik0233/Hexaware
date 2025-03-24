import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Eight from "../eight/Eight";
 // Ensure this CSS file exists

function RealSection() {
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Card Data from Seventh.js
  const cardData = [
    {
      title: "Delicious Pizza",
      text: "Try our cheesy and crispy pizza.",
      image: "/images/food_bg.jpg",
      cardClass: "custom-card landing-page-card",
      imgClass: "hover-image-disable",
    },
    {
      title: "Delicious",
      text: "Try our cheesy and crispy pizza.",
      image: "/images/food_bg.jpg",
      cardClass: "custom-card landing-page-card",
      imgClass: "hover-image-disable",
    },
    {
      title: "Pizza",
      text: "Try our cheesy and crispy pizza.",
      image: "/images/food_bg.jpg",
      cardClass: "custom-card landing-page-card",
      imgClass: "hover-image-disable",
    },
    {
      title: "Pizza",
      text: "Try our cheesy and crispy pizza.",
      image: "/images/food_bg.jpg",
      cardClass: "custom-card landing-page-card",
      imgClass: "hover-image-disable",
    },
    {
        title: "Pizza",
        text: "Try our cheesy and crispy pizza.",
        image: "/images/food_bg.jpg",
        cardClass: "custom-card landing-page-card",
        imgClass: "hover-image-disable",
      },
      {
        title: "Pizza",
        text: "Try our cheesy and crispy pizza.",
        image: "/images/food_bg.jpg",
        cardClass: "custom-card landing-page-card",
        imgClass: "hover-image-disable",
      },
      {
        title: "Pizza",
        text: "Try our cheesy and crispy pizza.",
        image: "/images/food_bg.jpg",
        cardClass: "custom-card landing-page-card",
        imgClass: "hover-image-disable",
      },
      {
        title: "Pizza",
        text: "Try our cheesy and crispy pizza.",
        image: "/images/food_bg.jpg",
        cardClass: "custom-card landing-page-card",
        imgClass: "hover-image-disable",
      },{
        title: "Pizza",
        text: "Try our cheesy and crispy pizza.",
        image: "/images/food_bg.jpg",
        cardClass: "custom-card landing-page-card",
        imgClass: "hover-image-disable",
      },
      {
        title: "Pizza",
        text: "Try our cheesy and crispy pizza.",
        image: "/images/food_bg.jpg",
        cardClass: "custom-card landing-page-card",
        imgClass: "hover-image-disable",
      },
      {
        title: "Pizza",
        text: "Try our cheesy and crispy pizza.",
        image: "/images/food_bg.jpg",
        cardClass: "custom-card landing-page-card",
        imgClass: "hover-image-disable",
      },
  ];

  const totalSlides = cardData.length;
  const slidesToShow = 3; // Adjust based on responsiveness

  const settings = {
    dots: false,
    infinite: false,
    speed: 600, // Smooth transition
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    beforeChange: (oldIndex, newIndex) => {
      setProgress(((newIndex + 1) / (totalSlides - slidesToShow + 1)) * 100);
    },
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="slider-container ">
      {/* Slick Slider */}
      <Slider ref={sliderRef} {...settings}>
        {cardData.map((item, index) => (
          <div key={index} className="card-slide ">
            <Eight
              title={item.title}
              text={item.text}
              image={item.image}
              cardClass={item.cardClass}
              imgClass={item.imgClass}
            />
          </div>
        ))}
      </Slider>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Navigation Buttons */}
      <div className="slider-controls">
        <button className="slider-btn left" onClick={() => sliderRef.current.slickPrev()}>
          <FaArrowLeft />
        </button>
        <button className="slider-btn right" onClick={() => sliderRef.current.slickNext()}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default RealSection;
