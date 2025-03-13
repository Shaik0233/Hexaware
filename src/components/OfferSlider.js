import React from "react";
import Slider from "react-slick";
import OfferSection from "./OfferSection";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/OfferSlider.css";

// Custom Arrows with props correctly passed
const PrevArrow = ({ onClick }) => (
  <FaChevronLeft
    className="slider-arrow left-arrow"
    onClick={onClick}
    aria-label="Previous Slide"
  />
);

const NextArrow = ({ onClick }) => (
  <FaChevronRight
    className="slider-arrow right-arrow"
    onClick={onClick}
    aria-label="Next Slide"
  />
);

const OfferSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="offer-slider-wrapper bg-primary text-white">
      <div className="container ">
        <h2 className="text-lg-start w-50 ">
          Empower Your Business with Access to World-Class Products, Services, and Solutions
        </h2>
        <p className="text">We cover your connected IT ecosystem.</p>

        <div className="offer-slider-container">
          <Slider {...settings}>
            <OfferSection
              title="Digital & Software"
              offer="Superior and differentiated customer experiences to enhance competitive advantage."
              image="/images/baground_image.jpg"
              hoverImage="/images/baground_image.jpg"
            />
            <OfferSection
              title="Cloud"
              offer="Flexible cloud solutions to accelerate your journey to the future."
              image="/images/baground_image.jpg"
              hoverImage="/images/baground_image.jpg"
            />
            <OfferSection
              title="Data & AI"
              offer="AI-enabled, data-driven decisions to open the door to new possibilities."
              image="/images/baground_image.jpg"
              hoverImage="/images/baground_image.jpg"
            />
            <OfferSection
              title="Digital IT Operations Services"
              offer="Enterprise-wide IT transformation to ensure business success"
              image="/images/baground_image.jpg"
              hoverImage="/images/baground_image.jpg"
            />
            <OfferSection
              title="Offer 5"
              offer="Amplify your business outcomes and drive innovation with Hexaware’s enterprise platform services"
              image="/images/baground_image.jpg"
              hoverImage="/images/baground_image.jpg"
            />
            <OfferSection
              title="Business Process Services"
              offer="Supercharged business process transformation to deliver true value."
              image="/images/baground_image.jpg"
              hoverImage="/images/baground_image.jpg"
            />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OfferSlider;
