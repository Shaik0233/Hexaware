import React from "react";
import "./Opportunity.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const OpportunitySection = ({ title, subtitle, buttonText, imageUrl }) => {
  return (
    <div className="opportunity-section row d-flex align-items-center">
      {/* Left Side (Text) */}
      <div className="text-content col-md-6 p-0">
        <p className="subtitle">{subtitle}</p>
        <h1 className="title">{title}</h1>
        
        <button className="">{buttonText}
           <i className=" cta-button bi bi-chevron-right"></i>
        </button>
      </div>

      {/* Right Side (Image) */}
      <div className="image-content col-md-6 p-0">
        <img src={imageUrl} alt="Opportunity" className="img-fluid" />
      </div>
    </div>
  );
};

export default OpportunitySection;
