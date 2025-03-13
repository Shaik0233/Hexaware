import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "../components/OfferSection.css";

const OfferSection = ({ title, offer, image, hoverImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="offer-card-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="offer-card">
        <Card.Body className="d-flex flex-column text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{offer}</Card.Text>
        </Card.Body>
        <img
          src={isHovered ? hoverImage : image}
          alt="Offer"
          className="offer-image"
        />
      </Card>
    </div>
  );
};

export default OfferSection;
