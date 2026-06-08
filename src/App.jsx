import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventsPage from "./pages/Events";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="dashboard" element={<h1>Dashboard - Coming Soon</h1>} />
        </Routes>
    );
}

export default App;