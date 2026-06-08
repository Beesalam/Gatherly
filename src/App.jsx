import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventsPage from "./pages/Events";
import NotFound from "./pages/NotFound";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;