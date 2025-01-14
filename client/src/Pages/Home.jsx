import React, { useState } from "react";
import { Images, Videos } from "../assets/Index";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import BlogItem from "../Components/BlogItem";

const Home = () => {

    const [processFlowFAQ, setProcessFlowFAQ] = useState(1);

    const ServicesArray = [
        [
            {
                id: 1,
                videoPath: Videos.mainLeftVideo,
                tags: ["Node-js", "PHP"],
                name: "Website Development",
                description: "We don’t just build websites; we create digital experiences that your visitors will never forget.",
            },
            {
                id: 2,
                videoPath: Videos.mainLeftVideo,
                tags: ["Java", "React Native"],
                name: "App Development",
                description: "We make apps that are more than icons on the screen. We ensure that your app delivers top-tier performance while looking more stunning than your competitors.",
            },
            {
                id: 3,
                videoPath: Videos.mainLeftVideo,
                tags: ["Figma", "UI/UX"],
                name: "Creative Design",
                description: "From logos to visuals, we create designs that don’t just speak, but shout out your brand’s vision",
            },
            {
                id: 4,
                videoPath: Videos.mainLeftVideo,
                tags: ["Consistency", "Analytics"],
                name: "Social Media Management",
                description: "We create posts that vibe with your followers and help you build an online presence that can skyrocket your revenue.",
            },
        ],
        [
            {
                id: 1,
                videoPath: Videos.mainLeftVideo,
                tags: ["Keywords", "Backlinks"],
                name: "Search Engine Optimization",
                description: "We help you rank above your competitors with SEO strategies that dominate search results.",
            },
            {
                id: 2,
                videoPath: Videos.mainLeftVideo,
                tags: ["Planning", "Targeting"],
                name: "Strategic Marketing",
                description: "We craft killer marketing plans that help your brand standout in this crowded digital world - ensuring more engagement & increased ROI.",
            },
            {
                id: 3,
                videoPath: Videos.mainLeftVideo,
                tags: ["Cutting", "Effects"],
                name: "Professional Video Editing",
                description: "With expert editing & strategic storytelling we make your videos standout from the millions of videos being posted on the internet every single day.",
            },
            {
                id: 4,
                videoPath: Videos.mainLeftVideo,
                tags: ["Automation", "Funnels"],
                name: "Advanced Webinar Funnel Setup",
                description: "We design advanced funnels that guarantee more enrollments for your webinars and ensure more sales.",
            },
        ],
    ];

    const ProcessFlowFAQ = [
        {
            id: 1,
            heading: "Foolproof Strategic Planning",
            content: "This is where we dive deep into your business and understand its core message. We map out the journey of your ideal customer and craft a laser-focused strategy that cuts through the noise.",
        },
        {
            id: 2,
            heading: "High-Convering Funnel Setup",
            content: "This is where we build the funnel that will allow you to take the back-seat and relax while it will continue to bring results for you on automation. <br/> <br/> Our copy kings will provide you the scripts for your video ads and our editing wizards will edit your video ads to get you all covered.",
        },
        {
            id: 3,
            heading: "Smart Ads Placements",
            content: "This is where we place your ads all over social media (Facebook & Instagram) targeting your potential customers to catch more eyeballs and get more enrollments for your webinars.",
        },
        {
            id: 4,
            heading: "Seamless Webinar Execution",
            content: "This is where you earn your cash. From registration to follow-ups, we make sure your webinars deliver the success for which you trusted us. <br/> <br/> Don’t know how to pitch? Don’t worry — our sales sharks will be there to guide you!",
        },
    ];


    const SmallService = [
        {
            id: 1,
            img: Images.WebDev,
            tittle: "Website Development",
            caption: "Communicating Vision",
        },
        {
            id: 2,
            img: Images.AppDev,
            tittle: "App Development",
            caption: "Seamless Connectivity",
        },
        {
            id: 3,
            img: Images.Design,
            tittle: "Creative Design",
            caption: "Designing Success",
        },
        {
            id: 4,
            img: Images.Social,
            tittle: "Social Media Management",
            caption: "Fueling Engagement",
        },
        {
            id: 5,
            img: Images.Marketing,
            tittle: "Strategic Marketing",
            caption: "Planning Futures",
        },
        {
            id: 6,
            img: Images.WebinarFunnel,
            tittle: "Advanced Webinar <br /> Funnel Setup",
            caption: "Empowering Growth",
        },
    ];


    const LatestBlog = [
        {
            id: 1,
            title: "Hubfolio agency revolutionizes work with the power of AI-Driven",
            catagory: "Design Trends",
            date: "/ August 13, 2024",
            img: Images.Post1,
            link: "/",
        },
        {
            id: 2,
            title: "Hubfolio agency revolutionizes work with the power of AI-Driven",
            catagory: "Design Trends",
            date: "/ August 13, 2024",
            img: Images.Post1 ,
            link: "/",
        },
    ];



    return (
        <>
            {/* Hero Section Code Here */}
            <section className="max-w-screen w-full min-h-screen dark:bg-dark-bg overflow-hidden pb-16 sm:pb-24">
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

            {/* About Us Code Here */}
            <section className="max-w-screen w-full dark:bg-dark-bg p-16 sm:py-20 md:py-[9rem] lg:py-[12rem] md:px-0 px-4">
                <section className="relative container mx-auto flex items-center justify-center flex-col gap-3 sm:gap-6 z-[2]">
                    <h1 className="about-us-min-text text-[11rem] custom-sm:text-[12rem] sm:text-[18rem] md:text-[23rem] lg:text-[30rem] font-black opacity-15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">WIN</h1>
                    <article className="z-[2]">
                        <h4 className="text-sm text-center sm:text-base text-white backdrop-blur-md uppercase bg-[rgba(110,127,153,0.11)] py-2 px-6 rounded-3xl">Why Biz Owners Love Brand Particle?</h4>
                    </article>
                    <article className="max-w-full sm:max-w-[600px] lg:max-w-[860px] w-full z-[2]">
                        <div className="relative">
                            <img className="w-20 sm:w-32 absolute top-20 sm:-top-3 sm:-left-24 lg:-top-8 lg:-left-20" src={Images.AboutUsElement1} alt="" />
                        </div>
                        <h2 className="text-white text-[1.25rem] custom-sm:text-[1.5rem] sm:text-[1.5rem] leading-[1.2] text-center font-medium">We love doing epic sh*t!<span className="text-dark-primary"> Our team of digital warriors take up all your stresses and help you earn 15-20 lakhs every single month.</span></h2>
                    </article>
                    <article className="pt-8 sm:pt-6 z-[2]">
                        <Link to={'#'} className="px-11 py-2 rounded-[100px] bg-dark-primary">Let’s Boost Your Biz</Link>
                    </article>
                </section>
            </section>

            <section className="max-w-screen w-full dark:bg-dark-bg py-20 px-4 sm:px-10 2xl:px-0">
                <section className="container mx-auto">
                    <div className="w-fit sm:ml-auto sm:mr-0 xl:mr-20 flex flex-col gap-5 mb-10 lg:mb-24">
                        <article className="flex items-center justify-start gap-4">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <h4 className="text-base custom-sm:text-xl sm:text-base lg:text-xl text-white font-light">Our Expertise</h4>
                        </article>
                        <article>
                            <h2 className="text-dark-primary text-3xl custom-sm:text-5xl sm:text-3xl lg:text-5xl font-semibold leading-[1.2] capitalize">We Are the Giants <br /> of this Field</h2>
                        </article>
                    </div>
                    <section className="flex flex-col sm:flex-row justify-start items-start gap-10 2xl:gap-20 relative main-service-conatiner">
                        {
                            ServicesArray.map((items, index) => {
                                return (
                                    <>
                                        <div key={index} className="w-full flex flex-col items-start justify-start gap-10 sm:gap-20">
                                            {items.map((item, i) => {
                                                return (
                                                    <>
                                                        <article className="flex w-full flex-col items-start justify-start gap-5 group">
                                                            <div className="w-full relative overflow-hidden">
                                                                <section className="absolute flex items-center justify-center gap-2 max-w-[280px] w-full transition-all duration-300 group-hover:-top-[1px] -top-[75px] h-[45px] -right-[1px]">
                                                                    <div className="absolute top-0 left-0">
                                                                        <img src={Images.ServiceComponent} alt="" />
                                                                    </div>
                                                                    {
                                                                        item.tags.map((tag, i) => {
                                                                            return (
                                                                                <p key={i} className="text-white rounded-full backdrop-blur-md text-xs py-2 px-4 uppercase bg-[rgba(110,127,153,0.11)]">
                                                                                    {tag}
                                                                                </p>
                                                                            )
                                                                        })
                                                                    }
                                                                </section>
                                                                <video className="object-cover max-h-[350px] lg:max-h-[489px] object-center rounded-3xl w-full overflow-hidden"
                                                                    autoPlay
                                                                    muted
                                                                    loop
                                                                    src={item.videoPath}>
                                                                </video>
                                                            </div>
                                                            <div className="text-white w-full flex flex-col items-start justify-start gap-2">
                                                                <h1 className="text-2xl custom-sm:text-4xl sm:text-2xl lg:text-4xl font-semibold">{item.name}</h1>
                                                                <div className="flex items-start lg:items-center justify-start gap-2">
                                                                    <span className="w-2 h-2 rounded-full bg-white block mt-2"></span>
                                                                    <p className="font-light text-sm sm:text-xs lg:text-sm w-[95%]">{item.description}</p>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </>
                                )
                            })
                        }
                    </section>
                </section>
            </section>

            <section className="max-w-screen w-full dark:bg-dark-bg py-20 px-4 md:px-0 z-[1]">
                <section className="relative container mx-auto flex flex-col items-center justify-center">
                    <article>
                        <h1 className="portfolio-min-text leading-[1] text-9xl custom-sm:text-[12rem] sm:text-[15rem] md:text-[20rem] xl:text-[25rem] font-bold">100+</h1>
                    </article>
                    <article className="relative -top-[40px] custom-sm:-top-[60px] sm:-top-[80px] md:-top-[90px] flex items-center justify-center flex-col gap-4 sm:gap-6 md:gap-8 max-w-[450px] sm:max-w-[500px] md:max-w-[800px] xl:max-w-[900px] w-full">
                        <h1 className="text-center text-3xl custom-sm:text-4xl sm:text-6xl md:text-7xl xl:text-8xl text-dark-primary font-semibold">We are <span className="relative z-[1] before:absolute before:content-[''] before:bg-[rgba(255,255,255,0.1)] before:w-full before:bottom-2 before:h-3 md:before:h-5 md:before:bottom-4 before:-z-[1]">the MVPs</span> of this game.</h1>
                        <h3 className="text-lg custom-sm:text-xl sm:text-2xl md:text-4xl xl:text-5xl font-semibold text-[rgba(255,255,255,63%)] text-center">Game-Changers & Always Winning</h3>
                        <p className="text-center text-white text-sm sm:text-base md:text-xl xl:text-2xl md:my-3 xl:my-5">We have helped 100+ biz owners like you transform their businesses with our advanced funnel strategies that convert like crazy.</p>
                        <div className="flex items-center justify-between flex-col custom-sm:flex-row gap-5 custom-sm:gap-2 sm:gap-3 md:gap-10 w-full">
                            <article className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm md:text-lg xl:text-xl"><span className="text-base md:text-xl xl:text-2xl"><FaCheckCircle /></span>Advanced Funnels</article>
                            <article className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm md:text-lg xl:text-xl"><span className="text-base md:text-xl xl:text-2xl"><FaCheckCircle /></span>Smart Ads</article>
                            <article className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm md:text-lg xl:text-xl"><span className="text-base md:text-xl xl:text-2xl"><FaCheckCircle /></span>High-converting Webinars</article>
                        </div>
                    </article>
                </section>
            </section>

            <section className="max-w-screen w-full dark:bg-dark-bg py-20 px-4">
                <div className="container mx-auto flex flex-col items-start justify-start gap-10 xl:gap-16">
                    <section className="flex sm:items-center justify-between flex-col sm:flex-row gap-8 custom-sm:gap-10 sm:gap-5 lg:gap-10 w-full">
                        <article className="w-fit sm:w-1/2 md:w-fit">
                            <h1 className="text-5xl custom-sm:text-7xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-bold">How</h1>
                            <h1 className="processFlow-main-text text-5xl custom-sm:text-7xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold relative z-[1] before:absolute before:content-[''] before:bg-[#D0FF71] before:opacity-[37%] before:w-full before:bottom-1 sm:before:bottom-0 xl:before:bottom-1 before:h-3 sm:before:h-2 md:before:h-3 before:-z-[1]">We Process.</h1>
                        </article>
                        <article className="w-full sm:w-1/2 lg:max-w-[500px] flex items-start justify-start flex-col gap-2 md:gap-4">
                            <div className="flex items-center justify-start gap-4">
                                <span className="flex items-center justify-center w-10 h-10 custom-sm:w-12 custom-sm:h-12 sm:h-8 sm:w-8 md:w-10 md:h-10 xl:w-12 xl:h-12 rounded-full bg-gradient-to-r from-[#CCFB73] to-[#8EB998]">
                                    <FaPlay className="text-white text-sm custom-sm:text-base sm:text-xs md:text-sm" />
                                </span>
                                <h3 className="text-white text-xl custom-sm:text-2xl sm:text-base">See How It Works</h3>
                            </div>
                            <div>
                                <p className="text-white text-base custom-sm:text-lg sm:text-xs md:text-sm xl:text-base"><span className="text-dark-primary">Say goodbye to old fashioned ways to get clients or to sell your courses.</span>
                                    This ‘Master Blueprint’ of ours will help you 10X your income and build your 7-figure online biz that prints money on automation.</p>
                            </div>
                        </article>
                    </section>
                    <section className="processFlow-main-container w-full rounded-lg min-h-[450px] md:min-h-[500px] lg:min-h-[700px] h-auto flex items-start justify-between flex-col sm:flex-row gap-5 lg:gap-10 p-8 custom-sm:p-10 sm:p-6 md:p-10 lg:p-16">
                        <article className="w-full">
                            <h1 className="text-[#1A1A1A] text-4xl custom-sm:text-5xl sm:text-3xl lg:text-5xl xl:text-6xl max-w-[500px] font-bold">Know Our Killer Game-Plan.</h1>
                            <section className="mt-10 sm:mt-5 lg:mt-10 flex items-start justify-start flex-col gap-8">
                                {
                                    ProcessFlowFAQ.map((faq, index) => {
                                        return (
                                            <>
                                                <article key={index}>
                                                    <button onClick={() => {
                                                        setProcessFlowFAQ(faq.id)
                                                    }} className="flex custom-sm:items-center justify-start gap-3 custom-sm:gap-5 sm:gap-3 lg:gap-5">
                                                        <span className={`${processFlowFAQ === faq.id ? "rotate-0" : "rotate-45"} text-white custom-sm:text-xl sm:text-lg lg:text-xl transition-all mt-1 custom-sm:mt-0 duration-300`}><IoMdClose /></span>
                                                        <p className="text-white text-left text-lg custom-sm:text-xl sm:text-base lg:text-lg font-semibold">{faq.heading}</p>
                                                    </button>
                                                    <div className={`${processFlowFAQ === faq.id ? "max-h-[300px] h-auto transition-[max-height] duration-300" : "max-h-0 h-auto transition-[max-height] duration-300"} overflow-hidden `}>
                                                        <p className="pt-3 pl-8 custom-sm:pl-10 sm:pl-7 lg:pt-4 lg:pl-10 text-base sm:text-xs md:text-sm lg:text-base text-white font-light" dangerouslySetInnerHTML={{ __html: faq.content }}></p>
                                                    </div>
                                                </article>
                                            </>
                                        )
                                    })
                                }
                            </section>
                        </article>
                        <article className="w-full relative flex items-center justify-start xl:justify-end">
                            <img className="md:block hidden w-full max-w-[90%] max-h-[450px] object-contain h-auto" src={Images.ProcessFlowMainimg} alt="" />
                            <video
                                className="processOverlap-video md:absolute md:top-10 -right-20 object-cover object-center rounded-xl sm:rounded-3xl max-w-full sm:max-w-[350px] lg:max-w-[400px] w-full max-h-[400px] sm:max-h-full md:max-h-[350px] lg:max-h-[450px] overflow-hidden"
                                autoPlay
                                muted
                                loop
                                src={Videos.mainLeftVideo}>
                            </video>
                        </article>
                    </section>
                </div>
            </section>



            <section className="max-w-screen w-full dark:bg-dark-bg py-20 px-4">
                <div className="container mx-auto">
                    <section className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5 sm:gap-8 md:gap-5 xl:gap-10">
                        <article className="w-full md:w-1/2">
                            <h1 className="text-3xl custom-sm:text-4xl sm:text-6xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-dark-primary">Relax, We <br /> Manage <span className="relative z-[1] before:absolute before:content-[''] before:bg-[#D0FF71] before:opacity-[20%] before:w-full before:bottom-2 before:h-3 sm:before:h-2 md:before:h-3 before:-z-[1]">Everything!</span></h1>
                        </article>
                        <article className="md:max-w-[50%] lg:max-w-[400px] xl:max-w-[500px] w-full">
                            <p className="text-white text-sm custom-sm:text-base sm:text-xl md:text-base lg:text-lg xl:text-xl">Our team of digital warriors will do everything for you so that you can focus on what you do the best — Running your business.</p>
                        </article>
                    </section>
                    <section className="mt-12 lg:mt-32 flex items-start md:items-center justify-evenly gap-y-8 gap-x-10 custom-sm:gap-5 small-service-container flex-wrap lg:flex-nowrap relative">
                        {SmallService.map((service, index) => {
                            return (
                                <>
                                    <article key={index} className="flex max-w-[155px] custom-sm:min-w-[180px] custom-sm:max-w-[200px] sm:min-w-[130px] xl:min-w-[160px] items-center justify-center gap-3 flex-col">
                                        <div className="flex items-center justify-center w-28 h-28 rounded-full bg-white">
                                            <img className="w-[60px]" src={service.img} alt="" />
                                        </div>
                                        <div className="flex items-center justify-center gap-1 flex-col">
                                            <h1 className="text-lg font-semibold text-white text-center" dangerouslySetInnerHTML={{ __html: service.tittle }}></h1>
                                            <p className="py-1 px-2 rounded-full text-xs bg-dark-primary text-center font-medium">{service.caption}</p>
                                        </div>
                                    </article>
                                </>
                            )
                        })}
                    </section>
                </div>
            </section>


            <section className="max-w-screen w-full dark:bg-dark-bg py-20 px-4">
                <div className="container mx-auto">
                    <section className="flex items-start lg:items-center justify-between flex-col lg:flex-row gap-5 lg:gap-20">
                        <article className="flex items-center justify-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-white block"></span>
                            <p className="text-white">Latest Articles</p>
                        </article>
                        <article className="flex items-start justify-start xl:gap-2 flex-col w-full lg:max-w-[700px] xl:max-w-[800px]">
                            <h1 className="text-white text-2xl sm:text-3xl lg:text-2xl xl:text-4xl lg:indent-[20%] w-full">The place where we share everything related to making your biz standout in this crowded digital world!</h1>
                            {/* <h1 className="text-white text-2xl xl:text-3xl text-left w-full"></h1> */}
                        </article>
                    </section>

                    <section className="mt-10 xl:mt-16">
                        <section className="flex items-center justify-between gap-10 flex-col lg:flex-row">
                            {LatestBlog.map((blog, index) => {
                                return (
                                    <BlogItem
                                        keyItem = {index}
                                        title={ blog.title}
                                        catagory={ blog.catagory}
                                        date={ blog.date}
                                        img={ blog.img}
                                    />
                                )
                            }) }
                        </section>
                        <div></div>
                    </section>
                </div>
            </section>

            <section className="max-w-screen w-full dark:bg-dark-bg py-20 px-4">
                <div className="container mx-auto border border-red-500 relative">
                    <section className="flex items-center justify-center flex-col gap-6">
                        <article className="flex items-center justify-center gap-2">
                            <span className="text-xs text-white px-[8px] py-[3px] rounded-full bg-[#262626] ">Join Now</span>
                            <p className="text-white text-sm">Don't Pay, Test Us First!</p>
                        </article>
                        <article>
                            <h1 className="text-8xl text-center font-bold">We Don't Sell, <br /> We Discuss</h1>
                        </article>
                        <article>
                            <p>Want to skyrocket your business? Book a call with us, and let's see if we're the perfect fit to work together.
                            </p>
                        </article>
                        <article>
                            <button>Book A Call With Us</button>
                        </article>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Home;
