import { useState, useEffect } from "react";
import API from "../service/api";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function AdminDashBoard() {

  const [provider, setProvider] = useState({
    name: "",
    serviceType: "",
    location: "",
    rating: ""
  });

  const [providers, setProviders] = useState([]);
  const navigate = useNavigate();

  const loadProviders = async () => {
    try {
      const res = await API.get("/providers");
      setProviders(res.data);
    } catch {
      alert("Error loading providers");
    }
  };

  useEffect(() => {
    loadProviders();
  }, []);

  const handleAdd = async () => {
    try {
      await API.post("/providers/add", provider);
      alert("Provider Added");

      setProvider({
        name: "",
        serviceType: "",
        location: "",
        rating: ""
      });

      loadProviders();
    } catch {
      alert("Error adding provider");
    }
  };

  return (
    <div style={styles.container}>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Admin Dashboard
      </motion.h2>
      <motion.button
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
       style={styles.button}
       onClick={() => navigate("/admin-bookings")}
      >View All Bookings</motion.button>

      {/* FORM */}
      <motion.div
        style={styles.form}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >

        <input
          placeholder="Provider Name"
          value={provider.name}
          onChange={(e) =>
            setProvider({ ...provider, name: e.target.value })
          }
        />

        <input
          placeholder="Service Type"
          value={provider.serviceType}
          onChange={(e) =>
            setProvider({ ...provider, serviceType: e.target.value })
          }
        />

        <input
          placeholder="Location"
          value={provider.location}
          onChange={(e) =>
            setProvider({ ...provider, location: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Rating"
          value={provider.rating}
          onChange={(e) =>
            setProvider({ ...provider, rating: Number(e.target.value) })
          }
        />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleAdd}
          style={styles.button}
        >
          Add Provider
        </motion.button>

      </motion.div>

      <h3>All Providers</h3>

      <div style={styles.grid}>
        {providers.map((p) => (

          <motion.div
            key={p.id}
            style={styles.card}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h4>{p.name}</h4>
            <p>Service: {p.serviceType}</p>
            <p>Location: {p.location}</p>
            <p>Rating: ⭐ {p.rating}</p>
          </motion.div>

        ))}
      </div>

    </div>
  );
}

const styles = {

  container: {
    padding: "30px",
    fontFamily: "Arial"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    gap: "10px",
    marginBottom: "30px"
  },

  button: {
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "6px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
    gap: "20px"
  },

  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  }

};

export default AdminDashBoard;