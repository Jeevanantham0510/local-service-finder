import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>

      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={styles.title}>Local Service Finder</h1>

        <p style={styles.text}>
          Find trusted professionals near you for all your home services.
        </p>

        <div style={styles.buttons}>
          <Link to="/auth">
            <button style={styles.button}>Login / Register</button>
          </Link>

          <Link to="/providers">
            <button style={styles.buttonSecondary}>View Providers</button>
          </Link>
        </div>
      </motion.div>

    </div>
  );
}

const styles = {

  container: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial"
  },

  card: {
    background: "white",
    padding: "50px",
    borderRadius: "12px",
    textAlign: "center",
    width: "400px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
  },

  title: {
    marginBottom: "10px"
  },

  text: {
    color: "#555",
    marginBottom: "30px"
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  },

  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    background: "#007bff",
    color: "white",
    cursor: "pointer"
  },

  buttonSecondary: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    background: "#28a745",
    color: "white",
    cursor: "pointer"
  }

};

export default Home;