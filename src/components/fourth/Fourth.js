import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center vh-100 position-relative bg-dark"
      style={{
        backgroundImage: "url('/images/food_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>

      {/* Content */}
      <Container className="position-relative text-white">
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12}>
            <h1 className="fw-bold">High-Impact</h1>
            <h1>Outcomes That Drive</h1>
            <h1>Your Business</h1>
            <p className="mx-auto w-75 w-md-50">
              In today's fast-paced world, efficiency is paramount. We leverage
              best-in-class talent and cutting-edge technology to expedite your
              digital journey.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
