import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CardComponent from "../eight/Eight";

function Nine() {
  const sliderRef = React.useRef(null);
  
  const cardData = [
    { title: "Pizza", text: "Delicious cheese pizza", image: "/images/baground_image.jpg" },
    { title: "Burger", text: "Juicy beef burger", image: "/images/food_bg.jpg" },
    { title: "Pasta", text: "Creamy Alfredo pasta", image: "/images/food_bg.jpg" },
    { title: "Paddu", text: "Creamy Alfredo pasta", image: "/images/food_bg.jpg" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mt-4 position-relative">
      <button
        className="btn btn-dark position-absolute start-0 top-50 translate-middle-y z-3"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FaArrowLeft />
      </button>
      <button
        className="btn btn-dark position-absolute end-0 top-50 translate-middle-y z-3"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaArrowRight />
      </button>
      <Slider ref={sliderRef} {...settings}>
        {cardData.map((item, index) => (
          <CardComponent key={index} {...item} />
        ))}
      </Slider>
    </div>
  );
}

export default Nine;
