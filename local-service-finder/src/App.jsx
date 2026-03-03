import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";
import Providers from "./pages/Providers";
import Booking from "./pages/Booking";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/providers" element={<Providers />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </Router>
    );
}

export default App;