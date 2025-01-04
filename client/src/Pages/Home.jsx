import React from "react";
import { useThemeContext } from "../Context/ThemeMode";

const Home = () => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <>
            <section className="w-screen h-[600vh] dark:bg-dark-bg overflow-hidden">

            </section>
        </>
    );
};

export default Home;
