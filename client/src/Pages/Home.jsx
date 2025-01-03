import React from "react";
import { useThemeContext } from "../Context/ThemeMode";

const Home = () => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <>
            <section className="w-screen h-screen dark:bg-dark-bg overflow-x-hidden">

            </section>
        </>
    );
};

export default Home;
