import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Banner.css";

const BackgroundWithDivs = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 position-relative text-white"
      style={{
        backgroundImage: "url('/images/baground_image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability on small screens */}
      <div className="overlay"></div>

      <div className="container position-relative z-2">
        <div className="row text-center text-md-start">
          {/* Left Column */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-1 title-text">Pursue Opportunity</h1>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <h4 className="fs-3 fw-normal mt-3 mt-md-5">
              Experience the impact across your digital ecosystem and beyond.
            </h4>
            <p className="fs-5 fw-normal mt-3">
              Connect with a Client Partner
              <span className="bg-white text-black rounded-4 ms-2 d-inline-flex align-items-center justify-content-center position-relative hover-move">
                <i className="bi bi-chevron-right fs-6 text-primary"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundWithDivs;
