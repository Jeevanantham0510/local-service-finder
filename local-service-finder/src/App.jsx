import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Providers from "./pages/Providers";
import Booking from "./pages/Booking";
import AdminDashBoard from "./pages/AdminDashBoard";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminBookings from "./pages/AdminBookings";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />

        <Route
          path="/providers"
          element={
            <ProtectedRoute>
              <Providers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking/:providerId"
          element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashBoard />
            </ProtectedRoute>
          }
        />
        <Route path="/admin-bookings" element={<AdminBookings />} />
     
      </Routes>
    </>
  );
}

export default App;