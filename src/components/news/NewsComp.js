import React from "react";
import "./NewsCard.css";

const NewsCard = ({ image, date, title, category }) => {
  return (
    <div className="reusable-card">
      {/* Card Image */}
      <div className="card-img-container">
        <img src={image} alt={title} className="card-img" />
      </div>

      {/* Card Content */}
      <div className="card-content">
        <p className="card-date">{date}</p>
        <h3 className="card-title">{title}</h3>
        <p className="card-category">{category}</p>
      </div>
    </div>
  );
};

export default NewsCard;
