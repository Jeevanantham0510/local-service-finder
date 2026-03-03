import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Local Service Finder</h2>
      <div>
        <Link to="/" style={styles.link}>Login/Register</Link>
        <Link to="/providers" style={styles.link}>Providers</Link>
        <Link to="/booking" style={styles.link}>Booking</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "#222",
    color: "white"
  },
  link: {
    marginLeft: "15px",
    color: "white",
    textDecoration: "none"
  }
};

export default Navbar;