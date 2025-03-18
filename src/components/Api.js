import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://picsum.photos/v2/list?limit=12");
        console.log("Fetched Data:", res.data); // Debugging
        setData(res.data);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h2>Fetching Data</h2>
        <div className="row">
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="col-md-4 mb-3">
                <Card className="shadow-sm">
                  <Card.Img
                    variant="top"
                    src={item.download_url}
                    alt="Random Image"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>Author: {item.author}</Card.Title>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      View Full Image
                    </a>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) :(
            <p className="text-center">No data available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Api;
