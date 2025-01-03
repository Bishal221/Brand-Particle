import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeContextProvider } from "./Context/ThemeMode";
import routes from "./Router";
import Header from "./Components/Header";

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <Router>
      <Header />
      {routes}
    </Router>
  </ThemeContextProvider>
);
