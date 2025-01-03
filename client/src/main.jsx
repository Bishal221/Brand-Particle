import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeContextProvider } from "./Context/ThemeMode";
import routes from "./Router";
import Header from "./Components/Header";

createRoot(document.getElementById("root")).render(
  <section className="max-w-screen overflow-hidden">
    <ThemeContextProvider>
      <Router>
        <Header />
        {routes}
      </Router>
    </ThemeContextProvider>
  </section>
);
