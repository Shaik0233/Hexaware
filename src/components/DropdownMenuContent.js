import React from "react";
import Card from "react-bootstrap/Card";
import "../components/navbar/Navbar.css"; // Keep the same styling

const DropdownMenuContent = ({ cards1, cards2, offer }) => {
  return (
    <div className="dropdown-container">
      <div className="row w-100 mx-0">
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          {cards1.map((card) => (
            <Card key={card.title} className="dropdown-card mb-3">
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.desc}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="col-12 col-md-4 mb-3 mb-md-0">
          {cards2.map((card) => (
            <Card key={card.title} className="dropdown-card mb-3">
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.desc}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="col-12 col-md-4">
          <Card className="dropdown-card offer-card h-100">
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title>Exclusive Offer</Card.Title>
              <Card.Text>{offer}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenuContent;
