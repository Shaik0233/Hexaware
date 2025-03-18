import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "../components/OfferSection.css";

const OfferSection = ({
  title,
  offer,
  image = "/images/default.jpg", // Default image if none provided
  hoverImage = "/images/default_hover.jpg",
  variant = "default", // Variant for different styles
  className = "", // Custom class for additional styling
  showButton = false, // Toggle button visibility
  buttonText = "Learn More", // Customizable button text
  onButtonClick = () => {} // Click event for button
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`offer-card-wrapper ${className}`} // Allow external class overrides
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className={`offer-card offer-${variant}`}>
        <Card.Body className="d-flex flex-column text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{offer}</Card.Text>

          {showButton && (
            <button className="btn btn-primary mt-3" onClick={onButtonClick}>
              {buttonText}
            </button>
          )}
        </Card.Body>
        <img
          src={isHovered ? hoverImage : image}
          alt={title}
          className="offer-image"
        />
      </Card>
    </div>
  );
};

export default OfferSection;
