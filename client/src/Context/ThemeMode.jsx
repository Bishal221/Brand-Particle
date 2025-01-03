import { createContext, useContext, useState, useEffect } from "react";

// Create the ThemeContext
const ThemeContext = createContext(null);

// Custom hook to use the ThemeContext
export const useThemeContext = () => useContext(ThemeContext);

// ThemeContextProvider to handle the theme logic
export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Check for saved theme in localStorage
        return localStorage.getItem("theme") || "dark";
    });

    // Update `localStorage` and document body class when theme changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme; // Add the theme class to body
    }, [theme]);

    // Toggle between light and dark modes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
