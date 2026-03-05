import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav style={styles.nav}>
      <h2>Local Service Finder</h2>

      <div>
        <Link to="/" style={styles.link}>Home</Link>

        {!isLoggedIn && (
          <Link to="/auth" style={styles.link}>Login</Link>
        )}

        {isLoggedIn && (
          <Link to="/providers" style={styles.link}>Providers</Link>
        )}

        {role === "ADMIN" && (
          <Link to="/admin-dashboard" style={styles.link}>
            Admin Dashboard
          </Link>
        )}

        {isLoggedIn && (
          <span onClick={logout} style={styles.link}>Logout</span>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#222",
    color: "white",
  },
  link: {
    color: "white",
    marginLeft: "15px",
    cursor: "pointer",
    textDecoration: "none",
  },
};

export default Navbar;