import React from "react";
import { mainMenu } from "./Menu";
import { Images } from "../assets/Index";
import { Link } from "react-router-dom";
import DarkModeSwitchComp from "./DarkModeSwitchComp";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <nav className="absolute w-[95%] max-w-[1400px] left-1/2 -translate-x-1/2 top-6">
        <section className="px-4 flex items-center justify-between">
          <article className="flex items-center justify-between gap-6">
            <div className="w-[220px] px-4 border border-slate-400 rounded-full">
              <Link to={"/"}>
                <img src={Images.BrandWhite} alt="Brand Particle" />
              </Link>
            </div>
            <div>
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
          <article className="flex items-center justify-start gap-4 w-[270px]">
            <div className="select-none">
              <DarkModeSwitchComp />
            </div>
            <div className="flex items-center justify-end group">
              <Link className="py-3 text-lg px-6 bg-dark-primary rounded-full group-hover:mr-1 -mr-3 transition-all duration-300 font-medium leading-none">
                Schedule a call
              </Link>
              <span className="bg-dark-primary flex items-center justify-center text-base group-hover:rotate-0 transition-all duration-300 -rotate-45 rounded-full w-10 h-10">
                <FaArrowRight />
              </span>
            </div>
          </article>
        </section>
      </nav>
    </>
  );
};

export default Header;
