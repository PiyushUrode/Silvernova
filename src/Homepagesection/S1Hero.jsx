import { useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import homevideo from "../assets/header/headervideo.mp4";


const S1Hero = memo(function S1Hero() {
  // Wrap in memo
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      once: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen h-[100vh] w-full ">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover   opacity-50 "
        src={homevideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>



      {/* Content Section */}
      <div
  id="home"
  className="relative z-10 min-h-screen header-background flex items-center justify-center px-5 sm:px-10 py-10"
>
  <div className="w-full  max-w-[90vw]  md:max-w-[80vw]  lg:max-w-[70vw] text-center md:text-left">
    <div className="relative text-center align-middle justify-center px-0  md:px-10 md:py-10 flex flex-col gap-6 md:gap-10">
    <h1
  data-aos="fade-up"
  className="text-4xl sm:text-3xl bg-text-custom-gradient bg-clip-text text-transparent shadow-inner-custom md:text-4xl lg:text-5xl xl:text-6xl font-gilroy font-semibold leading-tight md:leading-relaxed"
>
  Revolutionizing Digital Finance with Blockchain Innovation
</h1>

      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-sm     sm:text-xl  lg:text-xl  text-center align-middle justify-center lg:px-10 leading-relaxed text-gray-300 font-Titillium_Web"
      >
Silvernova Token (SRN) is more than just a cryptocurrency- It's a revolution in digital finance! Built on the TRC-20 network, SRN is designed to fuel a new era of seamless transactions, passive earnings, and blockchain-powered innovations.
      </p>

      <div className="flex flex-col text-center align-middle justify-center  sm:flex-row gap-5 md:gap-10 justify-center ">
        <button
          data-aos="zoom-in"
          data-aos-delay="600"
          className="relative px-10 sm:px-20 py-4 sm:py-5 font-gilroy font-bold text-black rounded-md hover:animate-popup-once "
          onClick={() => navigate("/presale")}  >
          <span className="absolute inset-0 p-px flex items-center justify-center rounded-md ">
            <span className="absolute inset-0 bg-black bg-button-custom-gradient flex items-center justify-center rounded-md ">
              Buy Now
            </span>
          </span>
        </button>



        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="relative px-10 sm:px-20 py-4 sm:py-5 text-yellow-400 font-gilroy rounded-md border-2 border-[#ffffff] hover:bg-button-custom-gradient 
          bg-[length:200%_100%] bg-left transition-all duration-500 hover:bg-right
          "
        >
          <span className="absolute inset-0 p-px flex items-center justify-center">
            <a
              href="https://orbits-token.gitbook.io/orbits-token/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffff] font-semibold uppercase"
            >
              WhitePaper
            </a>
          </span>
        </div>


        


      </div>
    </div>
  </div>
</div>


      {/* Partner Logos */}
      {/* <div className="absolute bottom-0 left-0 w-full py-5 bg-gradient-to-r from-black via-[#c37c0083] to-black flex items-center justify-center">
        <div className="flex gap-3 sm:gap-8 lg:gap-16 xl:gap-40 items-center aspect-auto object-contain">
          <img
            src={logo1}
            alt="Logo 1"
            className="h-[10px] az:h-[16px] sm:h-[20px] lg:h-[25px]"
          />
          <img
            src={logo2}
            alt="Logo 2"
            className="h-[10px] az:h-[16px] sm:h-[20px] lg:h-[25px]"
          />
          <img
            src={logo3}
            alt="Logo 3"
            className="h-[10px] az:h-[16px] sm:h-[20px] lg:h-[25px]"
          />
          <img
            src={logo4}
            alt="Logo 4"
            className="h-[10px] az:h-[16px] sm:h-[20px] lg:h-[25px]"
          />
          <img
            src={logo5}
            alt="Logo 5"
            className="h-[10px] az:h-[16px] sm:h-[20px] lg:h-[25px]"
          />
        </div>
      </div> */}
    </div>
  );
});

export default S1Hero;
