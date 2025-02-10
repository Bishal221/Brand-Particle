import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";

const ProtectedRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Simulate a short delay (e.g., fetch user data)
        setTimeout(() => {
            const token = localStorage.getItem("token");
            if (token) {
                setIsAuthenticated(true);
            }
            setLoading(false);
        }, 1000); // 1-second delay for smooth transition
    }, []);

    if (loading) {
        return <Loader />; // Show Loader while checking auth
    }

    return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
