import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log("Fetched Data:", json.slice(0, 12)); // Debugging
        setPhotos(json.slice(0, 12)); // Only 12 photos
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Check if images are loading correctly
  const handleImageError = (id) => {
    console.error(`Image with ID ${id} failed to load`);
  };

  // Use a more reliable image source as fallback
  const getReliableImageUrl = (id) => `https://picsum.photos/id/${id % 1000}/200/200`;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Fetched Photos</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading photos...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center">
          <strong>Error:</strong> {error}
        </div>
      ) : (
        <div className="row">
          {photos.map((photo) => (
            <div key={photo.id} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <img
                  src={photo.thumbnailUrl || getReliableImageUrl(photo.id)}
                  alt={photo.title || "Photo"}
                  className="card-img-top"
                  onError={(e) => {
                    handleImageError(photo.id);
                    e.target.src = getReliableImageUrl(photo.id);
                  }}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title text-truncate" title={photo.title}>
                    {photo.title}
                  </h6>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <a href={photo.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                      View Full Image
                    </a>
                    <small className="text-muted">ID: {photo.id}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchPhotos;