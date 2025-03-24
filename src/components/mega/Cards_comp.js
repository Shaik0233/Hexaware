import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Cards_comp.css"

function CardsComp(props) {
  return (
    <div className="container shadow-lg mt-5 p-2 card_container">
      <h2 className='text-primary fs-0'>{props.title}</h2>
      <p>{props.para}</p>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary">
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default CardsComp;

