import { useEffect, useState } from "react";
import API from "../service/api";

function AdminBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const res = await API.get("/bookings/all");
      setBookings(res.data);
    } catch {
      alert("Error loading bookings");
    }
  };

  return (
    <div style={styles.container}>

      <h2>All Bookings</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Provider ID</th>
            <th>Service</th>
            <th>Booking Date</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.userId}</td>
              <td>{b.providerId}</td>
              <td>{b.serviceName}</td>
              <td>{b.bookingDate}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px"
  },

  table: {
    width: "80%",
    margin: "auto",
    borderCollapse: "collapse",
    marginTop: "30px"
  },

  th: {
    borderBottom: "2px solid #333",
    padding: "12px",
    textAlign: "center",
    fontWeight: "bold"
  },

  td: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
    textAlign: "center"
  },

  row: {
    transition: "0.2s"
  }
};

export default AdminBookings;