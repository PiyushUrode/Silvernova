import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../MainComponent/Contact.jsx";
import "../index.css";
import logo from "../assets/logo/silvernovalogo2.png";

import footericon1 from "../assets/Image/footericon1.png";
import footericon2 from "../assets/Image/footericon2.png";

import footericon4 from "../assets/Image/footericon3.png";
import footericon5 from "../assets/Image/footericon4.png";
import footericon7 from "../assets/Image/footericon5.png";

import { IoIosArrowDropup } from "react-icons/io";

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContactPopup = () => {
    setIsContactOpen(!isContactOpen);
  };

  const scrollToTop = () => {
    const duration = 1000; // Duration in milliseconds (1 second)
    const start = window.scrollY; // Starting scroll position
    const startTime = performance.now(); // Time when the scroll starts

    // Perform the scroll gradually
    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Progress between 0 and 1

      // Scroll to the top with smooth easing
      window.scrollTo(0, start - start * progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll); // Keep animating until 100% progress
      }
    };

    requestAnimationFrame(animateScroll); // Start the smooth scroll animation
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
              <div className="w-[100%] h-[3px] bg-[#FF9D00] opacity-5  "></div>
      <footer className="bg-[#000000] z-10 rounded-t-3xl">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 z-10 gap-3 flex flex-col">
          <div className="md:flex md:justify-between tablet:justify-center z-10">
            <div className="flex flex-col  gap-8 sm:gap-5 mb-6 max-w-[100%] sm:max-w-[35%] tablet:max-w-[100%] items-left tablet:items-center md:mb-0">
              <Link className="flex items-left" smooth to="/">
                <img src={logo} className="     me-3" alt="laststake Logo" />
              </Link>
              <p> Token Development and Launch, Website Launch and Whitepaper Release, Initial Exchange Listings and Liquidity Pool Creation..</p>
           
              <div className="w-full "> 
          <div className="flex flex-row justify-normal items-center  align-middle gap-5 md:gap-10">
          
            <div className="flex flex-row  space-x-3 md:space-x-6"> 
  <a href="/" target="_blank" rel="noopener noreferrer">
    <img src={footericon1} alt="Facebook" className="hover:scale-110 transition-transform duration-300 w-10 md:w-10  hover:animate-popup "  />
  </a>
  <a href="/" target="_blank" rel="noopener noreferrer">
    <img src={footericon2} alt="Instagram" className="hover:scale-110 transition-transform duration-300 w-10 md:w-10 hover:animate-popup "  />
  </a>

  <a href="/" target="_blank" rel="noopener noreferrer">
    <img src={footericon7} alt="Telegram" className="hover:scale-110 transition-transform duration-300 w-10 md:w-10 hover:animate-popup" />
  </a>

  <a href="mailto:support@sILVER.io" target="_blank" rel="noopener noreferrer">
  <img src={footericon4} alt="Email" className="hover:scale-110 transition-transform duration-300 w-10 md:w-10 hover:animate-popup" />
</a>

  <a href="/" target="_blank" rel="noopener noreferrer">
    <img src={footericon5} alt="Twitter" className="hover:scale-110 transition-transform duration-300 w-10 md:w-10 hover:animate-popup" />
  </a>
  </div>
</div>
</div>
           



             





            </div>
            <div className="flex gap-[1vmax] pt-10 sm:pt-0 sm:gap-[5vmax]   w-full justify-center sm:justify-start md:justify-end tablet:flex-wrap z-10 ">
          
            <div className="flex  flex-col tablet:items-center">
                <h2 className=" mb-6 font-istok font-istok font-semibold  text-lg  md:text-2xl    uppercase leading-snug md:leading-tight">
          Links
                </h2>
                <ul className="text-gray-400 font-medium flex flex-col gap-4">
                  <li className="tablet:text-center">
                    <a href="/">
Privacy Policy
                    </a>
                  </li>



                  <li
                   className="tablet:text-center">
                    <a href="#token">Terms of use</a>
                  </li>

                  <li className="tablet:text-center">
                    <a href="#token">Legal</a>
                  </li>


                  <li className="tablet:text-center">
                    <a href="#token">Presale</a>
                  </li>


                </ul>
              </div>


              <div className="flex  flex-col tablet:items-center">
                <h2 className=" mb-6 font-istok font-istok font-semibold  text-lg  md:text-2xl    uppercase leading-snug md:leading-tight">
               Resource
                </h2>
                <ul className="text-gray-400 font-medium flex flex-col gap-4">
                  <li className="tablet:text-center">
                    <a href="/">
                      White Paper
                    </a>
                  </li>



                  <li className="tablet:text-center">
                    <a href="#token">Tokenomics</a>
                  </li>


                </ul>
              </div>

                  <div className="flex  flex-col tablet:items-center">
                <h2 className="  mb-6 font-istok font-semibold  text-lg  md:text-2xl    uppercase leading-snug md:leading-tight">
                Company
                </h2>
                <ul className="text-gray-400 font-medium">
                  <ul className="gap-4 flex flex-col">
                    <li className="tablet:text-center">
                      <a href="#about">About Us</a>
                    </li>
                    <li className="tablet:text-center">
                      <a href="#usecase">UseCase</a>
                    </li>



                    <li className="tablet:text-center">
                      <a href="#Roadmap">Roadmap</a>
                    </li>
                  </ul>
                </ul>
              </div>



              
            </div>
          </div>
      
        

        <div className="w-[100%] h-[3px]  opacity-5"></div>
          <div className="flex flex-row items-center tablet:text-center justify-between">
            <span className="text-sm sm:text-center text-[#ffffff]">
              © {currentYear} SilverNovaToken(SRN). All Rights Reserved.
            </span>
            <button onClick={scrollToTop}>
              <IoIosArrowDropup className="w-10 h-10" />
            </button>
          </div>
        </div>



      </footer>
      <div className="w-[100%] h-[3px] bg-[#FF9D00] opacity-5 "></div>


      {isContactOpen && (
        <div className="fixed w-full h-full overflow-x-hidden  inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ">
          <div className=" p-4 relative rounded-lg sm:w-[99%] justify-center h-full flex flex-row  ">
            <Contact />
            <button
  onClick={toggleContactPopup}
  className="mt-4 h-10 px-4 py-2 absolute top-5 right-0 w-[10%] sm:w-[5%] bg-red-500 text-white rounded flex justify-center items-center"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>

          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
