import React, { useState, useEffect } from "react";
import axios from "axios";

function Fetching() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
      .then((response) => {
        console.log("Fetched Data:", response.data); // for Debugging
        const photos = response.data.photos.slice(0, 12); // Get only the first 10 photos
        setRecords(photos);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {records.length === 0 ? <p>Loading images...</p> : null}
      <ul>
        {records.map((photo) => (
          <li key={photo.id}>
            <img 
              src={photo.img_src}  
              alt={`Mars Photo ${photo.id}`} 
              style={{ width: "150px", height: "150px", borderRadius: "8px" }} 
            />
            <p>{photo.camera.full_name}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetching;
