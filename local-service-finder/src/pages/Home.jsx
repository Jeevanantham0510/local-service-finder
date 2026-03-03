import React, { useEffect, useState } from "react";
import API from "../service/api";

function Home() {
  // Add temporary mock data here
  const [providers, setProviders] = useState([
    { id: 1, name: "John's Plumbing", location: "New York", experience: 10, rating: 4.8 },
    { id: 2, name: "Quick Fix Electrical", location: "Brooklyn", experience: 5, rating: 4.5 },
    { id: 3, name: "Green Thumb Gardening", location: "Queens", experience: 8, rating: 4.9 }
  ]);

  useEffect(() => {
    API.get("/providers")
      .then(res => setProviders(res.data))
      .catch(err => {
        console.log("Backend not reached, using mock data:", err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-primary">Available Service Providers</h2>

      <div className="row">
        {providers.map(p => (
          <div key={p.id} className="col-md-4">
            <div className="card p-3 mb-4 shadow-sm border-0">
              <h5 className="card-title text-dark">{p.name}</h5>
              <hr />
              <p className="mb-1"><b>📍 Location:</b> {p.location}</p>
              <p className="mb-1"><b>⏳ Experience:</b> {p.experience} years</p>
              <p className="mb-1"><b>⭐ Rating:</b> {p.rating} / 5</p>
              <button className="btn btn-primary mt-2">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;