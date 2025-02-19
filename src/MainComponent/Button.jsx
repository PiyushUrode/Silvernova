import React from 'react';

const Button = ({ leftText, rightText }) => {
    return (
        <div className='flex flex-row align-middle w-full  py-5 justify-center  '>
        

<button className="relative flex items-center justify-between font-semibold rounded-full text-base cursor-pointer transition-all duration-300 ease-in-out 
  w-[80%] sm:w-full h-[60px] bg-token-custom-gradient shadow-custom-drop  ">
  
  {/* Left side with gradient */}
  <div className="w-1/2 h-full flex items-center justify-center rounded-l-full ">
    <span className="text-white p-2 lg:px-8 rounded-lg bg-[#261F1F]  z-10">{leftText}</span>
  </div>

  {/* Right side with dark background */}
  <div className="w-1/2 h-full flex items-center justify-center rounded-l-full ">
    <span className="text-black p-2 lg:px-8 rounded-lg  bg-[#fafafa] z-10">{rightText}</span>
  </div>
</button>


        </div>
    );
};

export default Button;
