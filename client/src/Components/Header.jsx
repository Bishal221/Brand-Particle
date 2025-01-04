import React, { useEffect, useState } from "react";
import { mainMenu } from "./Menu";
import { Images } from "../assets/Index";
import { Link } from "react-router-dom";
import DarkModeSwitchComp from "./DarkModeSwitchComp";
import { FaArrowRight } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const [navScroll, setNavScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [customHeight, setCustomHeight] = useState(false);

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


  const MenuToggle = () => {
    if (menuOpen) {
      setCustomHeight(false);
      setTimeout(() => {
        setMenuOpen(false)
      }, 300);
    } else {
      setMenuOpen(!menuOpen)
      setTimeout(() => {
        setCustomHeight(!customHeight);
      }, 200);
    }
  }

  return (
    <>
      <nav
        className={`z-50 fixed ${menuOpen ? "menuOpen" : ""} ${navScroll
          ? "navScroll backdrop-blur-md"
          : "max-w-[1400px] w-[95%]"
          } normal-nav left-1/2 -translate-x-1/2 top-3 lg:top-4`}
      >
        <section
          className={`md:px-0 ${navScroll ? "px-4" : "px-0"
            } flex items-center justify-between`}
        >
          <article className='flex items-center justify-between gap-6'>
            <div
              className={`w-[180px] md:w-[220px] transition-all duration-500`}
            >
              <Link to={"/"}>
                <img
                  className='hidden dark:flex'
                  src={Images.BrandWhite}
                  alt='Brand Particle'
                />
                <img
                  className='flex dark:hidden'
                  src={Images.BrandColor}
                  alt='Brand Particle'
                />
              </Link>
            </div>
            <div className='lg:flex hidden transition-all duration-500'>
              <ul className='flex items-center justify-start gap-6 py-1 h-[45px] px-6 border border-slate-400 rounded-full'>
                {mainMenu.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      className='dark:text-white dark:hover:text-dark-primary transition-all duration-300'
                      to={menu.path}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>
          <article className='flex items-center lg:justify-start justify-end gap-4 w-[270px]'>
            <div className='select-none'>
              <DarkModeSwitchComp />
            </div>
            <div className='hidden lg:flex items-center justify-end group select-none'>
              <Link className='py-3 text-lg px-6 bg-dark-primary rounded-full group-hover:mr-1 -mr-3 transition-all duration-300 font-medium leading-none'>
                Schedule a call
              </Link>
              <span className='bg-dark-primary flex items-center justify-center text-base group-hover:rotate-0 transition-all duration-300 -rotate-45 rounded-full w-10 h-10'>
                <FaArrowRight />
              </span>
            </div>
            <div className='lg:hidden flex select-none cursor-pointer' onClick={MenuToggle}>
              <RiMenu3Fill className='text-xl dark:text-white' />
            </div>
          </article>
        </section>
        <section className={`${customHeight ? "h-fit max-h-[1000px]" : "max-h-0"} lg:hidden transition-[max-height] duration-300 overflow-hidden`}>
          <section className=' flex items-start justify-start flex-col gap-3 pt-8 md:pt-10 pb-4'>
            <article className='flex items-center gap-3'>
              <span className='w-2 h-2 rounded-full bg-[#26282c] dark:bg-white'></span>
              <div className='dark:text-white'>Have a look around</div>
            </article>
            <article>
              <ul className="flex items-start justify-start flex-col gap-1">
                {mainMenu.map((menu, index) => {
                  return (
                    <>
                      <li key={index}>
                        <Link className="dark:text-white dark:hover:text-dark-primary transition-all duration-300 text-4xl md:text-5xl font-semibold" to={menu.path}>
                          {menu.name}
                        </Link>
                      </li>
                    </>
                  )
                })}
              </ul>
            </article>
            <article className="flex items-center justify-end group select-none mt-3">
              <Link className='py-3 text-lg px-6 bg-dark-primary rounded-full group-hover:mr-1 -mr-3 transition-all duration-300 font-medium leading-none'>
                Schedule a call
              </Link>
              <span className='bg-dark-primary flex items-center justify-center text-base group-hover:rotate-0 transition-all duration-300 -rotate-45 rounded-full w-10 h-10'>
                <FaArrowRight />
              </span>
            </article>
          </section>
        </section>
      </nav>
    </>
  );
};

export default Header;
