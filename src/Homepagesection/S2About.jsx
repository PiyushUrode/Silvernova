import { useEffect, memo } from "react"; // Import memo
import about1 from "../assets/aboutimg/about.png"; // Imported image
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const S2About = memo(() => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      once: false,
    });

    // Preload the image dynamically
    const preloadImage = document.createElement("link");
    preloadImage.rel = "preload";
    preloadImage.as = "image";
    preloadImage.href = about1; // Image path from import
    preloadImage.imagesrcset = `${about1} 1x, ${about1} 2x`; // Optional: Add different resolutions
    document.head.appendChild(preloadImage);

    // Clean up when the component unmounts
    return () => {
      document.head.removeChild(preloadImage);
    };
  }, []);

  return (
    <div className="min-h-[90vh] pt-3 md:pt-0 bg-[#000000]">
      <div
        id="about"
        className="relative w-full h-full flex flex-col items-center px-3 md:px-10 py-10"
      >
        {/* Heading Section */}
        <div
          className="flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-[#000000] py-10"
          id="about"
        >
          <div className="w-full max-w-5xl">
            <h2 className="font-semibold bg-text-custom-gradient bg-clip-text text-transparent shadow-inner-custom  font-danger mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              About Us
            </h2>
          </div>
        </div>

        {/* Main Content Section */}
        <div id="abt4" className="w-full flex ">
          <div
            id="listing"
            className="relative min-h-[10vh] flex flex-col md:flex-row gap-10 md:gap-20 items-center"
          >
            {/* Image Section */}
            <div
              data-aos="fade-zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              id="filler-left"
              className="w-full md:w-[50%] flex justify-center md:justify-start"
            >
              <img
                loading="lazy"
                src={about1} // Image imported directly
                alt="About Image"
                className="transition-all duration-1000 transform hover:scale-110 w-full max-w-prose h-auto object-contain"
              />
            </div>

            {/* Text Content Section */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
              id="filler-right"
              className="w-full md:w-[50%] flex flex-col justify-center gap-10 text-center md:text-left"
            >
              <p
                data-aos="fade-left"
                data-aos-delay="1500"
                data-aos-duration="1000"
                className="text-md md:text-xl text-white font-istok leading-tight lg:w-[80%] mx-auto md:mx-0"
              >
                Silvernova Token (SRN) is more than just a cryptocurrency—it's a
                game-changer in digital finance! Built on the BEP-20 network,
                SRN empowers users with seamless transactions, passive earnings,
                and cutting-edge blockchain solutions. Whether you're staking
                for rewards, exploring the metaverse, shopping globally, or
                investing in tokenized assets, SRN makes it all possible. With
                its decentralized ecosystem, Silvernova is set to revolutionize
                gaming, DeFi, NFTs, and borderless payments—bringing financial
                freedom to all! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

S2About.displayName = "S2About";
export default S2About;
