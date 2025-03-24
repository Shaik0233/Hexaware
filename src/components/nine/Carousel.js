import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Ensure this CSS file exists

const Carousel = ({ data, CardComponent, slidesToShow = 3, slidesToScroll = 1 }) => {
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const totalSlides = data.length;

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
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
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, index) => (
          <div key={index} className="card-slide">
            <CardComponent {...item} />
          </div>
        ))}
      </Slider>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Carousel;
