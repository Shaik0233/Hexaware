import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Fifth.css";

const TwoSections = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Container fluid className="py-5">
      <Row className="align-items-center">
        {/* Left Section */}
        <Col md={6} className="left-content">
          <h2>Your Challenges = Our Mission</h2>
          <p>
            At Hexaware, solving your IT and business process challenges is our mission. Transforming complex data into insights with the power of AI? We’re on it. Enhancing customer experiences with innovative platforms? That’s our forte. Migrating to the cloud? Smooth and secure. Managing a contact center? Done. Across industries, our collaborative approach drives exceptional outcomes every step of the way. Your challenges, our solutions, proven success.
          </p>
        </Col>

        {/* Right Section with Video */}
        <Col md={6} className="d-flex justify-content-center position-relative">
          <div className="position-relative w-100 d-flex justify-content-center align-items-center" style={{ maxWidth: "500px" }}>
            <video ref={videoRef} src="/nature.mp4" className="w-100 rounded" muted></video>
            {!isPlaying && (
              <Button
                variant="dark"
                className="position-absolute"
                style={{
                  width: "60px",
                  height: "60px",
                  fontSize: "24px",
                  opacity: "0.7",
                  borderRadius: "50%",
                  zIndex: 10,
                }}
                onClick={handlePlay}
              >
                ▶
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TwoSections;
