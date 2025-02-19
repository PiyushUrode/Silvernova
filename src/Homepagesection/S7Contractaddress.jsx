import React, { useState, useEffect, memo } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
const Presale = memo(function Presale() {
  const contractAddress = "IJGFRU783JHRWNF9E4T4ER3";
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(contractAddress)
      .then(() => {
        toast.success("Copied to Clipboard! ✅"); // Toast notification
        setCopyStatus("Copied to Clipboard!");
        setTimeout(() => setCopyStatus(""), 2000); // Clears the message after 2 seconds
      })
      .catch(() => {
        toast.error("Copy failed ❌"); // Error toast
        setCopyStatus("Copy failed");
      });
  };

  return (
    <>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}

/>

      <div className="flex flex-col  text-center gap-5 align-middle items-center justify-center w-full px-5 py-10" id="contract">
        <div className="flex flex-col  items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-[#000000] py-1" id="usecase">
          <div className="w-full max-w-5xl">
         

          </div>
        </div>

        <div className=" w-full sm:w-[90%] md:w-[80%] lg:w-[60%] p-0.5 rounded-3xl">
       
          <div className="rounded-3xl border ">
            
            <div className="bg-black rounded-3xl p-5 flex flex-col gap-8 items-center justify-center">
            <h2 className="font-semibold bg-text-custom-gradient bg-clip-text text-transparent shadow-inner-custom mt-4 text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
              Contract Address
            </h2>
              <p
                className="text-base sm:text-lg md:text-xl font-semibold w-full sm:w-[90%] md:w-[60%] break-words leading-tight border p-3 rounded-2xl text-left"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {contractAddress}
              </p>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-md mx-auto">
                <button
                  className="relative px-16 md:px-16 py-5 text-sm md:text-base text-white font-quantico bg-black hover:text-[#ddd] border border-white rounded-2xl"
                  onClick={handleCopy} // ✅ Fixed function call
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >

                    <span className="absolute inset-0 bg-black rounded-xl m-1  text-white flex items-center justify-center">
                      Copy Address
                    </span>
                </button>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Presale;
