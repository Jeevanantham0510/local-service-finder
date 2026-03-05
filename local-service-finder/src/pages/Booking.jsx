import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../service/api";

function Booking() {

  const { providerId } = useParams();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const loadProvider = async () => {
      try {
        const res = await API.get(`/providers/${providerId}`);
        setProvider(res.data);
      } catch {
        alert("Error loading provider");
      }
    };

    loadProvider();
  }, [providerId]);

  const handleBooking = async () => {
    try {

      const bookingData = {
        userId: 1,
        providerId: providerId,
        serviceName: provider.serviceType,
        bookingDate: new Date().toISOString().split("T")[0]
      };

      await API.post("/bookings/book", bookingData);

      alert("Service Booked Successfully");

    } catch {
      alert("Booking failed");
    }
  };

  if (!provider) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Confirm Booking</h2>

      <p>Provider: {provider.name}</p>
      <p>Service: {provider.serviceType}</p>
      <p>Location: {provider.location}</p>

      <button onClick={handleBooking}>Confirm Booking</button>

    </div>
  );
}

export default Booking;