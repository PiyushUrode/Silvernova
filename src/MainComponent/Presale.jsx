
import { FaArrowRightLong } from "react-icons/fa6";


const Presale = () => {
   
    return (
        <div className="min-h-screen  flex flex-col items-center justify-center backgroundimg  ">
          
          <div className="relative  w-full h-full  ">
      <p className="text-center text-5xl font-bold text-white uppercase ">
        
        <span className="bg-clip-text text-transparent bg-custom-gradient animate-wave">
          PRESALE
        </span>{' '}

      </p>

    </div>


            {/* Main Token Section */}
            <div className="p-[2px] bg-custom-gradient rounded-lg  "> 
            <div className="w-full max-w-xl bg-black text-white p-6 rounded-lg shadow-lg  ">
                <h1 className="text-center text-xl md:text-3xl uppercase font-semibold  mb-2">LearnX TOKEN</h1>
                <p className="text-center text-sm mb-4 font-semibold ">Grab the deal Buy new LernX</p>

                {/* Progress Bar */}
                <div className="bg-gray-800 h-7 rounded-2xl mb-2 relative overflow-hidden">
                    <div
                        className="h-full bg-custom-gradient rounded-full"
                        style={{ width: "70%" }}
                    > </div>
                </div>
                <div className="flex justify-between items-center align-middle pt-3 text-sm">

                    <span className="">Current price: <br /> $ 0.001</span>
                    <FaArrowRightLong />
                    <span>Next price: <br /> $0.002</span>
                </div>

                {/* Payment Section */}
                <div className="text-center mt-2">
                    <p className="text-lg mb-2 text-white">You can buy with</p>
                    <div className="w-full flex flex-row justify-around items-center space-x-4">
                        {/* USDT Button */}
                        <button className="border-yellow-600  border text-white rounded-xl font-bold px-10 py-2 rounded-md flex items-center justify-around space-x-2 relative">
                            <img
                                src="/"
                                alt="USDT Icon"
                                className="w-5 h-5"
                            />
                            <span>USDT</span>
                        </button>

                        {/* BNB Button */}
                        <button className="border-yellow-600 border text-white rounded-xl px-10 font-bold  py-2 rounded-md flex items-center space-x-2 relative">
                            <img
                                src="/"
                                alt="BNB Icon"
                                className="w-5 h-5"
                            />
                            <span>BNB</span>
                        </button>
                    </div>

                </div>

                {/* Token Buying Section */}
                <div className="mt-2 text-center">
                    <p className="text-lg mb-4 text-white">Buy LearnX token Here</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <label className="block text-xl mb-2 text-white text-left">You pay</label>
                            <div className="relative   rounded-3xl border border-yellow-600  ">

                                <img
                                    src="/"
                                    alt="USDT Icon"
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                />

                                <input
                                    type="text"
                                    placeholder="Enter USDT Amount"
                                    className=" rounded-3xl  w-full pl-10 pr-3 py-2 bg-[#131111]   outline-none focus:ring-2 focus:ring-yellow-600 text-white placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-xl mb-2 text-white text-left">You Recieve</label>
                            <div className="relative  rounded-3xl border border-yellow-600 ">

                                <img
                                    src="/"
                                    alt="USDT Icon"
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                />

                                <input
                                    type="text"
                                    placeholder="Enter LearnX Amount"
                                    className="w-full  rounded-3xl   pl-10 pr-3 py-2 bg-[#131111]   outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-400"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Referral Address */}
                <div className="mt-6">
                    <label className="block text-sm mb-2 text-center">Referral Address</label>
                    <input
                        type="text"
                        placeholder="Enter Referral Address"
                        className="w-full px-3 py-2 bg-[#131111] text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-5   items-center justify-between mt-6">
                    <button className=" sm:w-[48%] w-full bg-custom-gradient text-black font-bold px-4 py-2 rounded-md">
                        Connect Wallet
                    </button>
                    <button className="sm:w-[48%] w-full border border-yellow-500 text-white font-bold px-4 py-2 rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>
            </div>


      
        </div>
    );
};

export default Presale;
