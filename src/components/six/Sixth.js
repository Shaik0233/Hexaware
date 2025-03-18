import React from "react";

function Sixth() {
  const data = [
    { value: "1.4B", label: "Annual Revenue (USD)" },
    { value: "31K", label: "Global Employees" },
    { value: "58", label: "Offices Worldwide" },
    { value: "35", label: "Years of Excellence" }
  ];

  return (
    <div className="w-100 min-vh-100 bg-primary text-white d-flex flex-column p-3 p-md-5 mb-2">
      <p className="mb-4 text-start fs-4">Hexaware Key Facts</p>
      <div className="container-fluid w-100 d-flex justify-content-center align-items-center flex-grow-1">
        <div className="row w-100 justify-content-center text-white">
          {data.map((fact, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3 d-flex">
              <div
                className="p-4  text-center w-100 d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: "200px" }}>
                <h1 className="text-dark display-2 text-white fw-bold">{fact.value}</h1>
                <p className=" text-white">{fact.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sixth;
