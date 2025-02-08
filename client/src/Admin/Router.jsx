import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

const AdminRoutes = () => {
    return (
        <section id="admin" className="bg-[#eaedf7] w-screen h-screen overflow-hidden">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            </Routes>
        </section>
    );
};

export default AdminRoutes;
