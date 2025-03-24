import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NewsCard from "./NewsComp"; // Ensure correct path
import "../nine/Nine.css"; // Ensure CSS file exists
import "./NewsMain.css";

function NewsMain() {
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const newsData = [
    { title: "Hexaware Welcomes Rahul Dravid as Cultural Ambassador", date: "March 20, 2025", category: "Press Release", image: "/images/food_bg.jpg" },
    { title: "New AI Tech Revolutionizing Healthcare", date: "March 18, 2025", category: "Technology", image: "/images/food_bg.jpg" },
    { title: "Tesla Unveils New Electric Car Model", date: "March 15, 2025", category: "Automobile", image: "/images/food_bg.jpg" },
    { title: "Stock Market Hits Record Highs", date: "March 10, 2025", category: "Finance", image: "/images/food_bg.jpg" },
    { title: "New Trends in Web Development for 2025", date: "March 5, 2025", category: "Technology", image: "/images/food_bg.jpg" },
  ];

  const slidesToShow = 3; // Number of visible slides
  const totalSlides = newsData.length;

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (oldIndex, newIndex) => {
      setProgress(((newIndex + slidesToShow) / totalSlides) * 100);
    },
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  useEffect(() => {
    setProgress((slidesToShow / totalSlides) * 100);
  }, []);

  return (
    <div className="slider-container progress_main">
      {/* Left Arrow */}
      <button className="slider-btn left" onClick={() => sliderRef.current.slickPrev()}>
        <FaArrowLeft />
      </button>

      {/* Slick Slider */}
      <Slider ref={sliderRef} {...settings}>
        {newsData.map((news, index) => (
          <div key={index} className="card-slide">
            <NewsCard {...news} />
          </div>
        ))}
      </Slider>

      {/* Right Arrow */}
      <button className="slider-btn right" onClick={() => sliderRef.current.slickNext()}>
        <FaArrowRight />
      </button>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default NewsMain;
