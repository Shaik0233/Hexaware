import React, { useState } from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import "../third/Title.css"; // Import the CSS file
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons

const CustomLayout = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [prevItem, setPrevItem] = useState(null);

  const data = [
    { 
      text: "Transition to a product-based approach", 
      images: "/images/food_bg.jpg",
      description: "Shift from traditional service delivery to a product-centric strategy that enhances customer engagement and business value."
    },
    { 
      text: "Achieve seamless cloud migration", 
      images: "/images/food_bg.jpg",
      description: "Move your IT infrastructure to the cloud with minimal downtime and maximum efficiency."
    },
    { 
      text: "Unlock potential with data & AI", 
      images: "/images/food_bg.jpg",
      description: "Leverage big data and artificial intelligence to drive innovation and better decision-making."
    },
    { 
      text: "Improve infrastructure management", 
      images: "/images/food_bg.jpg",
      description: "Optimize your IT and business infrastructure for increased reliability and scalability."
    },
    { 
      text: "Optimize business processes", 
      images: "/images/food_bg.jpg",
      description: "Streamline operations and improve workflow efficiency with intelligent automation."
    }
  ];

  const handleRowClick = (index) => {
    if (index !== selectedItem) {
      setPrevItem(selectedItem); // Store the previous image index
      setSelectedItem(index);
    }
  };

  return (
    <Container className="my-5 text-center">
      {/* Title & Subtext */}
      <div className="mb-4 d-flex flex-column align-items-center">
        <p className="text-muted">We empower you to rise above any challenge.</p>
        <h2 className="fw-bold text-center w-75 w-md-50">
          Customized For You and Your Digital Journey
        </h2>
      </div>

      <Row className="text-start g-4 d-flex align-items-stretch">
        {/* Table Section */}
        <Col xs={12} md={4} className="p-3 d-flex">
          <div className="w-100">
            <Table striped hover className="custom-table bg-white">
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`d-flex align-items-center ${
                      selectedItem === index ? "table-primary text-white fw-bold" : "text-muted"
                    }`}
                    onClick={() => handleRowClick(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <td className="pe-2">
                      <i className="bi bi-chevron-right"></i>
                    </td>
                    <td>{item.text}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>

        {/* Stacked Images Section */}
        <Col xs={12} md={4} className="p-3 d-flex align-items-center justify-content-center position-relative">
          <div className="stacked-image-container">
            {data.map((item, index) => {
              let className = "stacked-image";

              if (index === selectedItem) {
                className += " active"; // Move the selected image to front
              } else if (index === prevItem) {
                className += " to-back"; // Move previous image to the back
              }

              return (
                <Image
                  key={index}
                  src={item.images}
                  alt={`Image ${index}`}
                  className={className}
                  fluid
                  rounded
                />
              );
            })}
          </div>
        </Col>

        {/* Dynamic Content Section */}
        <Col xs={12} md={4} className="p-3 d-flex">
          <div className="w-100">
            <p className="text-muted">{data[selectedItem].description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomLayout;
