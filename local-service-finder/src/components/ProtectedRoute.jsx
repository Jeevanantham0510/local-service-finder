import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userRole = localStorage.getItem("role");

  if (!isLoggedIn) {
    return <Navigate to="/auth" />;
  }

  if (role && role !== userRole) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;