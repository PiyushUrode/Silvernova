import  { useEffect, memo } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../index.css"
import "../Homepagesection/Usecase.css"
import usecase1 from "../assets/usecase/usecase1.png"
import usecase2 from "../assets/usecase/usecase2.png"
import usecase3 from "../assets/usecase/usecase3.png"
import usecase4 from "../assets/usecase/usecase4.png"
import usecase5 from "../assets/usecase/usecase5.png"
import usecase6 from "../assets/usecase/usecase6.png"
import usecase7 from "../assets/usecase/usecase7.png"


const S3Usecase = memo(function S3Usecase() {
  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function for the animation
      once: false, // Animation runs only once
    });
  }, []);
  return (
    <>
<div 
  className="flex flex-col   items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-[#000000] py-10 md:py-0" 
  id="usecase"
>
  <div className="w-full max-w-5xl +">
  <h2 className="font-semibold bg-text-custom-gradient bg-clip-text text-transparent shadow-inner-custom  font-danger mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              UseCase
            </h2>

  </div>
</div>


      


<div className="flex flex-col md:flex-row items-center justify-center sm:gap-16 gap-5 py-6 px-1 md:px-0 w-full">
  {/* First Div */}
  <div className="usecase1">
    <div className="clip-container"> 
  <div className=" clip-content " >
   <h1>Staking and Rewards</h1>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center text-center  border border-[#4B4B4B] rounded-lg p-2 w-full md:max-w-xl shadow-md h-full">
  {/* Image Section (50% width on sm+, Full width on mobile) */}
  <div className="w-full sm:w-1/2 flex items-center justify-center">
    <img src={usecase1} loading="lazy" alt="Burn Mechanism" className="w-[80%] h-auto rounded-md" />
  </div>

  {/* Text Section (50% width on sm+, Full width on mobile) */}
  <div className="w-full sm:w-1/2 flex items-center justify-center sm:text-left">
    <p className="text-base leading-relaxed text-white">
    Secure your SRN, stake effortlessly, and earn passive income. Watch your portfolio expand while benefiting from decentralized finance and long-term growth opportunities in the crypto ecosystem.
    </p>
  </div>
</div>

  </div>

  <div className="usecase1">
    <div className="clip-container"> 
  <div className=" clip-content " >
   <h1>Gaming and Metaverse</h1>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center text-center  border border-[#4B4B4B] rounded-lg p-2 w-full md:max-w-xl shadow-md h-full">
  {/* Image Section (50% width on sm+, Full width on mobile) */}
  <div className="w-full sm:w-1/2 flex items-center justify-center">
    <img src={usecase2} loading="lazy" alt="Burn Mechanism" className="w-[80%] h-auto rounded-md" />
  </div>

  {/* Text Section (50% width on sm+, Full width on mobile) */}
  <div className="w-full sm:w-1/2 flex items-center justify-center">
    <p className="text-base leading-relaxed text-white md:text-left">
    Staking & Rewards Secure your SRN, stake effortlessly, and earn passive income. Watch your portfolio expand while benefiting from decentralized finance and long-term growth opportunities in the crypto ecosystem.
    </p>
  </div>
</div>

  </div>




</div>

<div className="flex flex-col md:flex-row items-center justify-center sm:gap-16 gap-5 py-6 px-1 md:px-0 w-full">
  {/* third Div */}
  <div className="usecase1">
    <div className="clip-container"> 
  <div className=" clip-content " >
   <h1>Ecommerce & Plateform</h1>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center text-center  border border-[#4B4B4B] rounded-lg p-2 w-full md:max-w-xl shadow-md h-full">
  {/* Image Section (50% width on sm+, Full width on mobile) */}
  <div className="w-full sm:w-1/2 flex items-center justify-center">
    <img src={usecase3} loading="lazy" alt="Burn Mechanism" className="w-[80%] h-auto rounded-md" />
  </div>

  {/* Text Section (50% width on sm+, Full width on mobile) */}
  <div className="w-full sm:w-1/2 flex items-center justify-center">
    <p className="text-base leading-relaxed text-white md:text-left">
    Shop globally with SRN for instant, secure, and low-cost transactions. Enjoy borderless payments, reduced fees, and seamless digital purchases across multiple platforms, making online shopping more accessible.
    </p>
  </div>
</div>

  </div>

  <div className="usecase1">
    <div className="clip-container"> 
  <div className=" clip-content " >
   <h1>NFT MARKETPLACE</h1>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center text-center  border border-[#4B4B4B] rounded-lg p-2 w-full md:max-w-xl shadow-md h-full">
  {/* Image Section (50% width on sm+, Full width on mobile) */}
  <div className="w-full sm:w-1/2 flex items-center justify-center">
    <img src={usecase4} loading="lazy" alt="Burn Mechanism" className="w-[80%] h-auto rounded-md" />
  </div>

  {/* Text Section (50% width on sm+, Full width on mobile) */}
  <div className="w-full sm:w-1/2 flex items-center justify-center">
    <p className="text-base leading-relaxed text-white md:text-left">
    Own, trade, and showcase exclusive digital assets on the SRN-powered NFT marketplace. Buy rare collectibles, tokenize creations, and participate in a thriving decentralized digital art economy.
    </p>
  </div>
</div>

  </div>




</div>


<div className="flex flex-col md:flex-row items-center justify-center sm:gap-16 gap-5 py-6 px-1 md:px-0 w-full">
  {/* fourth Div */}
  <div className="usecase1">
    <div className="clip-container"> 
  <div className=" clip-content " >
   <h1>Borderless Payments</h1>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center text-center  border border-[#4B4B4B] rounded-lg p-2 w-full md:max-w-xl shadow-md h-full">
  {/* Image Section (50% width on sm+, Full width on mobile) */}
  <div className="w-full sm:w-1/2 flex items-center justify-center">
    <img src={usecase5} loading="lazy" alt="Burn Mechanism" className="w-[80%] h-auto rounded-md" />
  </div>

  {/* Text Section (50% width on sm+, Full width on mobile) */}
  <div className="w-full sm:w-1/2 flex items-center justify-center">
    <p className="text-base leading-relaxed text-white md:text-left">
    Send and receive SRN worldwide within seconds. Eliminate intermediaries, reduce transaction costs, and enable fast, secure, and transparent cross-border financial interactions in a decentralized environment.
    </p>
  </div>
</div>

  </div>

  <div className="usecase1">
    <div className="clip-container"> 
  <div className=" clip-content " >
   <h1>DeFi Lending & Borrowing</h1>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center text-center  border border-[#4B4B4B] rounded-lg p-2 w-full md:max-w-xl shadow-md h-full">
  {/* Image Section (50% width on sm+, Full width on mobile) */}
  <div className="w-full sm:w-1/2 flex items-center justify-center">
    <img src={usecase6} loading="lazy" alt="Burn Mechanism" className="w-[80%] h-auto rounded-md" />
  </div>

  {/* Text Section (50% width on sm+, Full width on mobile) */}
  <div className="w-full sm:w-1/2 flex items-center justify-center">
    <p className="text-base leading-relaxed text-white md:text-left">
    Access crypto-backed loans with SRN. Borrow securely, lend your assets for passive income, and explore new financial opportunities in the decentralized finance space without traditional banking restrictions.
    </p>
  </div>
</div>

  </div>




</div>


<div className="flex flex-col md:flex-row items-center justify-center sm:gap-16 gap-5 py-6 px-1 md:px-0 w-full">
  {/* fourth Div */}
  <div className="usecase1">
    <div className="clip-container"> 
  <div className=" clip-content " >
   <h1>Tokenized Investments</h1>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center text-center  border border-[#4B4B4B] rounded-lg p-2 w-full md:max-w-xl shadow-md h-full">
  {/* Image Section (50% width on sm+, Full width on mobile) */}
  <div className="w-full sm:w-1/2 flex items-center justify-center">
    <img src={usecase7} loading="lazy" alt="Burn Mechanism" className="w-[80%] h-auto rounded-md" />
  </div>

  {/* Text Section (50% width on sm+, Full width on mobile) */}
  <div className="w-full sm:w-1/2 flex items-center justify-center">
    <p className="text-base leading-relaxed text-white md:text-left">
    Diversify your portfolio with SRN-powered tokenized assets, including real estate, stocks, and commodities. Invest in blockchain-based financial instruments for secure, transparent, and global investment opportunities.
    </p>
  </div>
</div>

  </div>






</div>














    </>)
})

export default S3Usecase