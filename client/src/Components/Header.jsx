import React, { useEffect, useState } from "react";
import { mainMenu } from "./Menu";
import { Images } from "../assets/Index";
import { Link } from "react-router-dom";
import DarkModeSwitchComp from "./DarkModeSwitchComp";
import { FaArrowRight } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`z-50 rounded-[99999px] fixed ${navScroll ? 'max-w-[360px] lg:max-w-[1000px] w-full p-4 bg-[#f5f5f5cc] dark:bg-[#26282ccc] backdrop-blur-md' : 'max-w-[1400px] w-[95%]'} transition-all duration-500 left-1/2 -translate-x-1/2 top-6`}>
        <section className={`md:px-0 ${navScroll ? "px-4" : "px-0" } transition-all duration-500 flex items-center justify-between`}>
          <article className="flex items-center justify-between gap-6">
            <div className={`w-[180px] lg:w-[220px] transition-all duration-500 ${navScroll ? "px-0 border-none" : "px-4 border border-slate-400"} rounded-full`}>
              <Link to={"/"}>
                <img className="hidden dark:flex" src={Images.BrandWhite} alt="Brand Particle" />
                <img className="flex dark:hidden" src={Images.BrandColor} alt="Brand Particle" />
              </Link>
            </div>
            <div className="lg:flex hidden transition-all duration-500">
              <ul className="flex items-center justify-start gap-6 py-1 h-[45px] px-6 border border-slate-400 rounded-full">
                {mainMenu.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      className="dark:text-white dark:hover:text-dark-primary transition-all duration-300"
                      to={menu.path}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>
          <article className="flex items-center lg:justify-start justify-end gap-4 w-[270px]">
            <div className="select-none">
              <DarkModeSwitchComp />
            </div>
            <div className="hidden lg:flex items-center justify-end group">
              <Link className="py-3 text-lg px-6 bg-dark-primary rounded-full group-hover:mr-1 -mr-3 transition-all duration-300 font-medium leading-none">
                Schedule a call
              </Link>
              <span className="bg-dark-primary flex items-center justify-center text-base group-hover:rotate-0 transition-all duration-300 -rotate-45 rounded-full w-10 h-10">
                <FaArrowRight />
              </span>
            </div>
            <div className="lg:hidden flex">
              <RiMenu3Fill className="text-xl dark:text-white" />
            </div>
          </article>
        </section>
      </nav>
    </>
  );
};

export default Header;
