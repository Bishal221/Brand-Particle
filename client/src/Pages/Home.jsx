import React from "react";
import { Images, Videos } from "../assets/Index";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            {/* Hero Section Code Here */}
            <section className="max-w-screen w-full min-h-screen dark:bg-dark-bg overflow-hidden pb-24">
                <section className="mt-[120px] lg:mt-[150px] container mx-auto flex items-start justify-start flex-col gap-8 relative px-4">
                    <article className="w-full relative z-[2]">
                        <h1 className="text-dark-primary text-4xl custom-sm:text-5xl md:text-7xl lg:text-5xl xl:text-6xl 2xl:text-[4.05rem] leading-[1.1] font-semibold max-w-[900px] lg:max-w-[700px] xl:max-w-[900px] 2xl:max-w-[950px]">We Help Clients Turn their Biz into a Revenue Machine</h1>
                    </article>
                    <article className="hidden lg:block w-full max-w-[420px] custom-lg:max-w-[490px] xl:max-w-[530px] relative">
                        <video
                            className="object-cover object-center max-w-[530px] rounded-3xl w-full max-h-[400px] overflow-hidden"
                            autoPlay
                            muted
                            loop
                            src={Videos.mainLeftVideo}>
                        </video>
                        <div className="w-[150px] h-[150px] absolute -right-[80px] top-1/2 -translate-y-1/2">
                            <img className="backdrop-blur-md animate-spin-slow" src={Images.RoundImg} alt="" />
                        </div>
                    </article>
                    <article className="lg:max-w-[500px] custom-lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[700px] w-full lg:absolute lg:top-3 lg:right-0">
                        <section className="relative">
                            <div className="hidden lg:block absolute w-[300px] -top-[1px] -left-[1px] 2xl:left-0">
                                <img src={Images.VideoComponent} alt="" />
                            </div>
                            <video
                                className="object-cover object-center lg:max-w-[700px] rounded-3xl w-full max-h-[450px] overflow-hidden"
                                autoPlay
                                muted
                                loop
                                src={Videos.mainLeftVideo}>
                            </video>
                            <div className="absolute w-[350px] lg:w-[300px] -left-[2px] -bottom-[1px] lg:h-[145px] h-[170px] pr-12 flex pb-3">
                                <div className="absolute top-0 left-0 w-full h-full z-[1]">
                                    <img src={Images.VideoComponentNew} alt="" />
                                </div>
                                <div className="text-white z-[2] font-light gap-2 flex flex-col items-end justify-end relative">
                                    <p className="lg:text-xs text-dark-primary">Since <br />
                                        2020</p>
                                    <p className="lg:text-sm text-right">Generate 7-Figure Income Like a Child’s Play</p>
                                </div>
                            </div>
                        </section>
                    </article>
                </section>
            </section>

            <section>
                
            </section>

            {/* About Us Code Here */}
            <section className="max-w-screen w-full dark:bg-dark-bg py-[12rem] md:px-0 px-4">
                <section className="relative container mx-auto flex items-center justify-center flex-col gap-6 z-[2]">
                    <h1 className="about-us-min-text text-[30rem] font-black opacity-15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">WIN</h1>
                    <article className=" z-[2]">
                        <h4 className="text-white backdrop-blur-md uppercase bg-[rgba(110,127,153,0.11)] py-2 px-6 rounded-3xl">Why Biz Owners Love Brand Particle?</h4>
                    </article>
                    <article className="max-w-[860px] w-full z-[2]">
                        <h2 className="text-white text-[1.5rem] leading-[1.2] text-center font-medium">We love doing epic sh*t!<span className="text-dark-primary"> Our team of digital warriors take up all your stresses and help you earn 15-20 lakhs every single month.</span></h2>
                    </article>
                    <article className="pt-6 z-[2]">
                        <Link to={'#'} className="px-11 py-2 rounded-[100px] bg-dark-primary">Let’s Boost Your Biz</Link>
                    </article>
                </section>
            </section>
        </>
    );
};

export default Home;
