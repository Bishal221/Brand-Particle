import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AdminRoutes from "./Admin/Router"; // Import Admin Routes

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />

            {/* Admin Routes */}
            <Route path="/admin/*" element={<AdminRoutes />} /> {/* Use * to match sub-routes */}
        </Routes>
    );
};

export default AppRoutes;
