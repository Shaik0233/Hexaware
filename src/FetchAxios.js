import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

function Fetch() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") // Fetch data using Axios
      .then((response) => setRecords(response.data)) // Set the response data
      .catch((error) => console.error("Error fetching data:", error)); // Handle errors
  }, []);

  return (
    <div>
      <ul>
        {records.map((list) => (
          <li key={list.id}>
            {list.id} | {list.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
