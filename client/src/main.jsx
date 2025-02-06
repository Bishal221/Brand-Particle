import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeContextProvider } from "./Context/ThemeMode";
import routes from "./Router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Create a wrapper component to conditionally render Header and Footer
const AppWrapper = () => {
  const location = useLocation(); // Get the current route location

  // Define routes where Header and Footer should be excluded
  const excludeHeaderFooterPaths = ["/admin", "/admin-login"];

  // Check if the current path is in the exclude list
  const shouldExcludeHeaderFooter = excludeHeaderFooterPaths.includes(location.pathname);

  return (
    <section className="max-w-screen overflow-hidden">
      {!shouldExcludeHeaderFooter && <Header />} {/* Conditionally render Header */}
      {routes} {/* Render the routes */}
      {!shouldExcludeHeaderFooter && <Footer />} {/* Conditionally render Footer */}
    </section>
  );
};

// Render the app
createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <Router>
      <AppWrapper />
    </Router>
  </ThemeContextProvider>
);