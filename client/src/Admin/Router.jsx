import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute"; // Ensure this file exists

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} /> 
            <Route path="/" element={<Dashboard />} />
        </Routes>
    );
};

export default AdminRoutes;
