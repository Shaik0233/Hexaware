import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CardComponent from "../eight/Eight"; // Ensure this component accepts title, text, and image props
import "./Nine.css"; // Ensure this CSS file exists

function Nine({ headings, description, cardData }) {
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const totalSlides = cardData.length;
  const slidesToShow = 4; // Adjust based on screen size

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    autoplay: false,
    beforeChange: (oldIndex, newIndex) => {
      const maxIndex = totalSlides - slidesToShow;
      setProgress(((newIndex / maxIndex) * 100).toFixed(2)); // Proper percentage calculation
    },
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="slider-container card-colour">
 
      {headings.map((heading, index) => (
        <h1 key={index}>{heading}</h1>
      ))}
      <p>{description}</p>

      
      <Slider ref={sliderRef} {...settings}>
        {cardData.map((item, index) => (
          <div key={index} className="card-slide">
            <CardComponent {...item} />
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

export default Nine;
