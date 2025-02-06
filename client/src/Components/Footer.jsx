import React, { useState } from 'react'
import { Images } from "../assets/Index";
import { Link } from "react-router-dom";
import { FaMapPin, FaLinkedin, FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaArrowRight, FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Footer = () => {

    
    const [year, setYear] = useState(new Date().getFullYear())


    return (
        <footer className="max-w-screen w-full dark:bg-dark-bg px-4 py-10 relative">
            <section className="container mx-auto bg-[#1A1B1E] sm:px-20 px-10 pt-10 sm:pt-16 pb-10 rounded-b-2xl rounded-t-2xl relative">

                <div className="absolute top-0 left-0 w-14 h-60 bg-dark-bg z-[1]">
                    <span className="absolute bottom-[0.75rem] left-[28px] w-[1.75rem] bg-[#1A1B1E] h-16 -z-[1]"></span>
                    <span className="absolute bottom-[2.25rem] left-0 w-full bg-dark-bg h-10 rounded-br-full -z-[1]"></span>
                    <span className="absolute bottom-0 left-0 w-full bg-[#1A1B1E] h-10 rounded-tl-full -z-[1]"></span>

                    <article className="w-full flex flex-col items-center justify-start h-full gap-2 z-[2] pt-2">
                        <Link className="w-7 h-7 bg-dark-primary rounded-full flex items-center justify-center text-black" to={''}>
                            <FaLinkedin />
                        </Link>
                        <Link className="w-7 h-7 bg-dark-primary rounded-full flex items-center justify-center text-black" to={''}>
                            <FaInstagram />
                        </Link>
                        <Link className="w-7 h-7 bg-dark-primary rounded-full flex items-center justify-center text-black" to={''}>
                            <FaFacebookSquare />
                        </Link>
                        <Link className="w-7 h-7 bg-dark-primary rounded-full flex items-center justify-center text-black" to={''}>
                            <FaYoutube />
                        </Link>
                        <Link className="w-7 h-7 bg-dark-primary rounded-full flex items-center justify-center text-black" to={''}>
                            <FaXTwitter />
                        </Link>
                    </article>
                </div>


                <div className="flex items-start justify-start flex-col gap-12">
                    <section className="flex items-start justify-between gap-10 flex-wrap">
                        <div className="pl-10 sm:pl-0 w-full md:w-[55%] lg:w-[45%] xl:max-w-[30%]">
                            <h1 className="text-3xl sm:text-5xl text-white mb-6">Do you like what you see?</h1>
                            <article className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                                <div className='flex items-center justify-start group select-none'>
                                    <Link className='py-2 text-base px-6 bg-dark-primary rounded-full group-hover:mr-1 -mr-3 transition-all duration-300 font-medium leading-none'>
                                        Schedule a call
                                    </Link>
                                    <span className='bg-dark-primary text-sm flex items-center justify-center group-hover:rotate-0 transition-all duration-300 -rotate-45 rounded-full w-8 h-8'>
                                        <FaArrowRight />
                                    </span>
                                </div>
                                <div className="max-w-[97px]">
                                    <img className="w-full" src={Images.GoogleRating} alt="" />
                                </div>
                            </article>
                        </div>
                        <article className="w-[40%] sm:w-[45%] md:w-[35%] lg:w-[45%] xl:w-fit">
                            <h1 className="text-2xl sm:text-3xl text-white">Company</h1>
                            <ul className="flex text-sm sm:text-base items-start justify-start flex-col gap-2 text-white mt-5">
                                <li className="opacity-50 hover:opacity-100 transition-all duration-300"><Link to={"#"}>About us</Link></li>
                                <li className="opacity-50 hover:opacity-100 transition-all duration-300"><Link to={"#"}>Culture</Link></li>
                                <li className="opacity-50 hover:opacity-100 transition-all duration-300"><Link to={"#"}>Testimonials</Link></li>
                                <li className="opacity-50 hover:opacity-100 transition-all duration-300"><Link to={"#"}>Process</Link></li>
                                <li className="opacity-50 hover:opacity-100 transition-all duration-300"><Link to={"#"}>FAQ's</Link></li>
                                <li className="opacity-50 hover:opacity-100 transition-all duration-300"><Link to={"#"}>Braning FAQ's</Link></li>
                                <li className="opacity-50 hover:opacity-100 transition-all duration-300"><Link to={"#"}>Blog</Link></li>
                            </ul>
                        </article>
                        <article className="w-[40%] sm:w-[45%] md:w-[45%] xl:w-fit">
                            <h1 className="text-2xl sm:text-3xl text-white">Explore</h1>
                            <ul className="flex text-sm sm:text-base items-start justify-start flex-col gap-2 text-white mt-5">
                                <li className="opacity-50 hover:opacity-100 transition-all duration-300"><Link to={"#"}>Home</Link></li>
                                <li className="opacity-50 hover:opacity-100 transition-all duration-300"><Link to={"#"}>Work</Link></li>
                                <li className="opacity-50 hover:opacity-100 transition-all duration-300"><Link to={"#"}>Services</Link></li>
                                <li className="opacity-50 hover:opacity-100 transition-all duration-300"><Link to={"#"}>Careers</Link></li>
                                <li className="opacity-50 hover:opacity-100 transition-all duration-300"><Link to={"#"}>Sectors</Link></li>
                                <li className="opacity-50 hover:opacity-100 transition-all duration-300"><Link to={"#"}>Hex Test</Link></li>
                                <li className="opacity-50 hover:opacity-100 transition-all duration-300"><Link to={"#"}>Contact</Link></li>
                            </ul>
                        </article>
                        <article className="w-full md:w-[45%] xl:max-w-[20%]">
                            <h1 className="text-2xl sm:text-3xl text-white">Get in touch</h1>
                            <ul className="flex text-sm sm:text-base items-start justify-start flex-col gap-2 text-white mt-5 opacity-50">
                                <li className="flex items-start gap-3"><span className="mt-1 text-lg"><IoCall /></span>+91 1234567890</li>
                                <li className="flex items-start gap-3"><span className="mt-1 text-lg"><IoIosMail /></span>email@email.com</li>
                                <li className="flex items-start gap-3"><span className="mt-1 text-lg"><FaMapPin /></span>12/1A/3D Chowbagha Road Kolkata - 700039</li>
                            </ul>
                        </article>
                    </section>
                    <section className="flex flex-col xl:flex-row items-center justify-between gap-10 w-full">
                        <article className="flex flex-col sm:flex-row items-center justify-between gap-8 order-2 xl:order-1">
                            <img className="w-[180px]" src={Images.BrandWhite} alt="" />
                            <p className="text-white opacity-50 text-sm">©{year} Brand Particle Pvt Ltd 2024</p>
                        </article>
                        <article className="text-white opacity-50 flex-col md:flex-row flex items-start sm:items-center justify-start sm:justify-center xl:justify-end text-sm w-full md:min-w-[650px] gap-2 md:gap-0">
                            <Link to={'#'} className="md:pr-4">Brand Creators From Kolkata</Link>
                            <Link to={'#'} className="md:border-l md:border-r border-slate-400 md:px-4">All Rights Reserved</Link>
                            <Link to={'#'} className="md:pl-4">Privacy Policy(you really care?)</Link>
                        </article>
                    </section>
                </div>
            </section>
        </footer>
    )
}

export default Footer