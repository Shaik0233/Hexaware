import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CardsComp from "../mega/Cards_comp";
import CardData from "../../data/CardData";
import ListCard from "../list/ListCard";

function MegaNav() {
  return (
    <div className="container mt-5">
      <div className="row g-4 min-vh-100">
        <div className="col-lg-4 d-flex flex-column">
          {CardData.slice(0, 3).map((card, index) => (
            <CardsComp key={index} title={card.title} para={card.para} />
          ))}
        </div>

        <div className="col-lg-4 d-flex flex-column">
          {CardData.slice(3, 6).map((card, index) => (
            <CardsComp key={index} title={card.title} para={card.para} />
          ))}
        </div>
        
        <div className="col-lg-4 d-flex flex-column">
          <div
            className="w-100 h-100 p-3 border rounded shadow overflow-auto"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <h5 className="mb-3">Offerings</h5>
            <ListCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaNav;
