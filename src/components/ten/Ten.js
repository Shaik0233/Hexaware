import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching data from API...");

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log("Response Status:", res.status);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data.slice(0, 12)); // Log first 12 items
        setPhotos(data.slice(0, 12));
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Fetched Photos</h2>
      <div className="row">
        {photos.map(({ id, title, url, thumbnailUrl }) => {
          const fallbackImage = `https://picsum.photos/id/${id % 1000}/200/200`;

          return (
            <div key={id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img
                  src={thumbnailUrl}
                  alt={title}
                  className="card-img-top"
                  onError={(e) => {
                    console.warn(`Image failed to load: ${thumbnailUrl}. Using fallback.`);
                    e.target.src = fallbackImage;
                  }}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6 className="text-truncate" title={title}>{title}</h6>
                  <p className="text-muted small">Source: {thumbnailUrl}</p>
                  <button
                    onClick={() => window.open(url, "_blank")}
                    className="btn btn-sm btn-primary"
                  >
                    View Full Image
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FetchPhotos;
