import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../eight/Eight.css"

const Eight = ({ title, text, image, cardClass = "custom-card", imgClass = "hover-image" }) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className={`card ${cardClass} p-4 position-relative`}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
        {image && <img src={image} alt="icon" className={imgClass} />}
      </div>
    </div>
  );
};

export default Eight;