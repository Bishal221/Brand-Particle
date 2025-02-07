import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeContextProvider } from "./Context/ThemeMode";
import AppRoutes from "./Router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { AuthProvider } from "./Context/AuthContext";

// Create a wrapper component to conditionally render Header and Footer
const AppWrapper = () => {
  const location = useLocation(); // Get the current route location

  // Define routes where Header and Footer should be excluded
  const excludeHeaderFooterPaths = ["/admin/login", "/admin"];

  // Normalize pathname by removing trailing slashes
  const currentPath = location.pathname.replace(/\/$/, "");

  // Check if the current path is in the exclude list
  const shouldExcludeHeaderFooter = excludeHeaderFooterPaths.includes(currentPath);

  return (
    <section className="max-w-screen overflow-hidden">
      {!shouldExcludeHeaderFooter && <Header />}
      <AppRoutes /> {/* Render all routes */}
      {!shouldExcludeHeaderFooter && <Footer />}
    </section>
  );
};

// Render the app
createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
      <Router>
        <AuthProvider>
          <AppWrapper />
        </AuthProvider>
      </Router>
    </ThemeContextProvider>
);
