import  {memo} from "react";

import "../Homepagesection/Roadmap.css"; // Add your styles here
import str1img from "../assets/partners/str1.png";
import str2img from "../assets/partners/str2.png";
import str3img from "../assets/partners/str3.png";
import str4img from "../assets/partners/str4.png";


const S5Roadmap = memo(function S5Roadmap() {
  return (
    <> 
        <div className="flex flex-col items-center text-center py-10  ">
        <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold tracking-normal w-full mb-6">
        <h2 className="font-semibold bg-text-custom-gradient bg-clip-text text-transparent shadow-inner-custom  font-danger mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Strategic Partners
            </h2>
        </div>
        <div className="w-full pt-0.5 pb-0.5   ">
          <div
            className="flex justify-center  md:justify-evenly bg-black align-middle    flex-wrap items-center gap-1 w-full overflow-x-auto   gap-10 sm:gap-5 md:gap-0 flex-wrap "
            id="img-section"
          >
            <img
              src={str1img}
              alt="Strategic Partner 1"
              className="h-16 w-28 sm:h-30 sm:w-30 md:h-36 md:w-36 lg:h-40 lg:w-60 object-contain"
            />
            <img
              src={str2img}
              alt="Strategic Partner 2"
              className="h-16 w-28 sm:h-30 sm:w-30 md:h-36 md:w-36 lg:h-40 lg:w-60 object-contain"
            />
            <img
              src={str3img}
              alt="Strategic Partner 3"
              className="h-16 w-28 sm:h-30 sm:w-30 md:h-36 md:w-36 lg:h-40 lg:w-60 object-contain"
            />
            <img
              src={str4img}
              alt="Strategic Partner 4"
              className="h-16 w-28 sm:h-30 sm:w-30 md:h-36 md:w-36 lg:h-40 lg:w-60 object-contain"
            />

          </div>
        </div>
      </div>

       <div
            className="flex flex-col  items-center justify-center text-center px-4 sm:px-6 lg:px-8   py-10"
            id="Roadmap"
          >
            <div className="w-full max-w-5xl ">
 
              <h2 className="font-semibold bg-text-custom-gradient bg-clip-text text-transparent shadow-inner-custom mt-4 text-2xl sm:text-2xl md:text-2xl lg:text-4xl">
              Roadmap
              </h2>
             </div>
          
             <div className="section8">
                    <div className="roadmap-slider">
                        <div className="roadmap-line"></div>
                        {/* phase1 */}
                        <div className="roadmap-phase1" data-phase="1">
                            <div className="phase-contentt">
                                <div className="phase-timee xl:border-2 xl:px-16 xl:py-1  xl:rounded-full bg-text-custom-gradient bg-clip-text text-transparent "> The Launchpad <br/>
                                (Q1 2025)</div>
                            </div>
                            <div className="quarter-circle w-full border-2 bg-white hidden md:block  text-black"> 
                                <div className="text-2xl font-semibold z-10 mb-2 "> Phase1 </div>
                            </div>
                            <div className="phase-content">
                                <div className='boxone'>
                                    <div className='vertical-line'></div>
                                    <div className='line-dot'></div>
                                </div>
                                <div className="phase-content-text border-2 p-2 border-slate-400 "> 
                                <div className="phase-heading">Conceptualization and Launch</div>
                                <div className="phase-description">
                                    <ul>
                                        <li>Market Research</li>
                                        <li>Token Development</li>
                                        <li>Website Launch</li>
                                        <li>Community Building</li>
                                        <li>Listing on DEX</li>
                                        <br />
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* phase2 */}
                        <div className="roadmap-phase2" data-phase="2">
                            <div className="phase-content">
                                <div className="phase-content-text border-2 p-2 border-slate-400"> 
                                <div className="phase-heading"> Foundation and Partnerships</div>
                                <div className="phase-description">
                                    <ul>
                                        <li>Strategic Collaborations</li>
                                        <li>Mini Multiplex Planning</li>
                                        <li>NFT Marketplace Development</li>
                                        <li>Streaming Platform Partnerships</li>
                                    </ul>
                                </div>
                                </div>
                                <div className='boxone'>
                                    <div className='line-dot'></div>
                                    <div className='vertical-line'></div>
                                </div>
                            </div>
                            <div className="quarter-circle w-full border-2 bg-white hidden md:block  text-black"> 
                                <div className="text-2xl font-semibold z-10 mb-2"> Phase2 </div>
                            </div>
                            <div className="phase-content">
                                <div className="phase-time xl:border-2 xl:px-16 xl:py-1  xl:rounded-full "> Expansion & Adoption <br/>
                                (Q2 2025)</div>
                            </div>
                        </div>
{/* phase3 */}
                        <div className="roadmap-phase1" data-phase="3">
                            <div className="phase-contentt">
                                <div className="phase-timee xl:border-2 xl:px-16 xl:py-1  xl:rounded-full"> DeFi Domination <br/> (Q3 2025)</div>
                            </div>
                            <div className="quarter-circle w-full border-2 bg-white hidden md:block text-black"> 
                                <div className="text-2xl font-semibold z-10 mb-2  "> Phase3 </div>
                            </div>
                            <div className="phase-content">
                                <div className='boxone'>
                                    <div className='vertical-line'></div>
                                    <div className='line-dot'></div>
                                </div>
                                <div className="phase-content-text border-2 p-2 border-slate-400"> 
                                <div className="phase-heading">Expansion and Utility Growth</div>
                                <div className="phase-description">
                                    <ul>
                                        <li>Launch NFT Marketplace</li>
                                        <li>Pilot Mini Multiplex</li>
                                        <li>Event Management Solutions</li>
                                        <li>Educational Program Initiatives</li>
                                        <br></br>
                                        <br></br>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* phase4 */}
                        <div className="roadmap-phase2" data-phase="4">
                            <div className="phase-content">
                                <div className="phase-content-text border-2 p-2 border-slate-400"> 
                                <div className="phase-heading">Diversification and Global Reach</div>
                                <div className="phase-description">
                                    <ul>
                                        <li>Streaming Platform Integration</li>
                                        <li>Global Multiplex Expansion</li>
                                        <li>Stakeholder Benefits</li>
                                        <li>Event Management Portal</li>
                                    </ul>
                                </div>
                                </div>
                                <div className='boxone'>
                                    <div className='line-dot'></div>
                                    <div className='vertical-line'></div>
                                </div>
                            </div>
                            <div className="quarter-circle w-full border-2 bg-white hidden md:block text-black"> 
                                <div className="text-2xl font-semibold z-10 mb-2 "> Phase4 </div>
                            </div>
                            <div className="phase-content">
                                <div className="phase-time xl:border-2 xl:px-16 xl:py-1  xl:rounded-full ">The Metaverse Takeover <br/>
                                (Q4 2025 )</div>
                            </div>
                        </div>

                    </div>
                </div>
    </div>








    </>






  );
});



export default S5Roadmap