import { useRef } from 'react';

const spaceship_quote1 = `Jacob Thomas`;
const spaceship_quote2 = `Software Engineer`;
const bio1 = `What started off as competitive interest in Math, led to a fire for Math, Physics, and Computers.`;
const bio2 = `Now, I have just recently graduated from CSU San Marcos with a B.S. Computer`;
const videoRef = useRef(null);

const homeItems = [
    {
        id: 1,
        content: (
            <>
                <div className="w-full md:w-1/2 h-[95vh] relative flex justify-center border-b-[1px] md:border-r-[1px] border-[#FAF9F6]">
                    <video
                        ref={videoRef}
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
                        loop muted playsInline
                        onLoadedMetadata={(e) => e.target.playbackRate = .5}
                    >
                        <source src="/assets/spaceship.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)] z-11"></div>
                    <div id="spaceship_quote_container" className="spaceship absolute z-40 bottom-55/100 w-full flex justify-center rounded-[2px] ">
                        <div id="spaceship_quote" className="spaceship relative text-[#ffffff] text-[3rem] md:text-[3.5rem] font-bold whitespace-nowrap overflow-hidden">{spaceship_quote1}
                            <div className="text-[2rem] md:text-[2.5rem] font-bold text-left">{spaceship_quote2}</div></div>
                    </div>
                    <div id="home_link_container" className="absolute z-40 bottom-25/100 w-100/100 flex justify-center">
                        <a href="https://github.com/jakethomas1" target="_blank" rel="noopener noreferrer" className="home_links text-[#ffffff] text-[20px] font-semibold mx-4 px-8 md:px-12 bg-blue-600 rounded-[4px] py-3 md:py-2">Github</a>
                        <a href="https://linkedin.com/in/jakethomas1" target="_blank" rel="noopener noreferrer" className="home_links text-[#ffffff] text-[20px] font-semibold mx-4 px-8 md:px-12 bg-blue-600 rounded-[4px] py-3 md:py-2">LinkedIn</a>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 2,
        content: (
            <>
                <div className="relative w-full md:w-1/2 h-[95vh] bg-[#181818] vignette border-t-[1px] md:border-l-[1px] border-black flex flex-col items-center justify-center">
                    <div id="homepage_text_container" className="text-white text-[18px] relative flex flex-col items-center w-1/2 mb-[90px] overflow-hidden">
                        {bio1}
                        <div className="h-[40px] w-full"></div>
                        <div id="glorified_br" className="relative flex items-center h-[2px] w-80/100 bg-[#fff] m-[6px]">
                            <div className="absolute left-0 -translate-x-[4px] h-full w-[8px] bg-[#fff] [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]"></div>
                            <div className="absolute right-0 translate-x-[4px] h-full w-[8px] bg-[#fff] [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] "></div>
                        </div>
                        <div className="h-[40px] w-full"></div>
                        {bio2}


                    </div>
                    <div id="homepage_link_container" className="text-white relative flex flex-row items-center">
                        <a href="/assets/JacobThomas_Resume.pdf" target="_blank" className="block no-underline text-inherit">
                            <div className="h-[50px] w-[170px] whitespace-nowrap 
                                rounded-[24px] border-[2px] border-[#494946] mx-[6px] bg-[#262625]
                                flex items-center justify-center font-bold hover:bg-[#464645]
                                hover:border-[#999996] transition-all duration-200 ease-in-out active:bg-[#9c9c9c] text-[18px]">
                                Resum&#233;
                            </div>
                        </a>
                        <a href="https://www.parchment.com/u/award/95d7dc7f49b6813fab2a29af0ad7adc4" target="_blank" className="block no-underline text-inherit">
                            <div className="h-[50px] w-[170px] whitespace-nowrap 
                                rounded-[24px] border-[2px] border-[#494946] mx-[6px] bg-[#262625]
                                flex items-center justify-center font-bold hover:bg-[#464645]
                                hover:border-[#999996] transition-all duration-200 ease-in-out active:bg-[#9c9c9c] text-[18px]">
                                Diploma
                            </div>
                        </a>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 3,
        content: (
            <>
                <div className="relative w-full md:w-1/2 h-[95vh] bg-[#181818] vignette border-t-[1px] md:border-l-[1px] border-black flex flex-col items-center justify-center">
                    <div id="homepage_text_container" className="text-white text-[18px] relative flex flex-col items-center w-1/2 mb-[90px] overflow-hidden">
                        {bio1}
                        <div className="h-[40px] w-full"></div>
                        <div id="glorified_br" className="relative flex items-center h-[2px] w-80/100 bg-[#fff] m-[6px]">
                            <div className="absolute left-0 -translate-x-[4px] h-full w-[8px] bg-[#fff] [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]"></div>
                            <div className="absolute right-0 translate-x-[4px] h-full w-[8px] bg-[#fff] [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] "></div>
                        </div>
                        <div className="h-[40px] w-full"></div>
                        {bio2}


                    </div>
                    <div id="homepage_link_container" className="text-white relative flex flex-row items-center">
                        <a href="/assets/JacobThomas_Resume.pdf" target="_blank" className="block no-underline text-inherit">
                            <div className="h-[50px] w-[170px] whitespace-nowrap 
                                rounded-[24px] border-[2px] border-[#494946] mx-[6px] bg-[#262625]
                                flex items-center justify-center font-bold hover:bg-[#464645]
                                hover:border-[#999996] transition-all duration-200 ease-in-out active:bg-[#9c9c9c] text-[18px]">
                                Resum&#233;
                            </div>
                        </a>
                        <a href="https://www.parchment.com/u/award/95d7dc7f49b6813fab2a29af0ad7adc4" target="_blank" className="block no-underline text-inherit">
                            <div className="h-[50px] w-[170px] whitespace-nowrap 
                                rounded-[24px] border-[2px] border-[#494946] mx-[6px] bg-[#262625]
                                flex items-center justify-center font-bold hover:bg-[#464645]
                                hover:border-[#999996] transition-all duration-200 ease-in-out active:bg-[#9c9c9c] text-[18px]">
                                Diploma
                            </div>
                        </a>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 4,
        content: (
            <>
                <div className="relative w-full md:w-1/2 h-[95vh] bg-[#181818] vignette border-t-[1px] md:border-l-[1px] border-black flex flex-col items-center justify-center">
                    <div id="homepage_text_container" className="text-white text-[18px] relative flex flex-col items-center w-1/2 mb-[90px] overflow-hidden">
                        {bio1}
                        <div className="h-[40px] w-full"></div>
                        <div id="glorified_br" className="relative flex items-center h-[2px] w-80/100 bg-[#fff] m-[6px]">
                            <div className="absolute left-0 -translate-x-[4px] h-full w-[8px] bg-[#fff] [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]"></div>
                            <div className="absolute right-0 translate-x-[4px] h-full w-[8px] bg-[#fff] [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] "></div>
                        </div>
                        <div className="h-[40px] w-full"></div>
                        {bio2}


                    </div>
                    <div id="homepage_link_container" className="text-white relative flex flex-row items-center">
                        <a href="/assets/JacobThomas_Resume.pdf" target="_blank" className="block no-underline text-inherit">
                            <div className="h-[50px] w-[170px] whitespace-nowrap 
                                rounded-[24px] border-[2px] border-[#494946] mx-[6px] bg-[#262625]
                                flex items-center justify-center font-bold hover:bg-[#464645]
                                hover:border-[#999996] transition-all duration-200 ease-in-out active:bg-[#9c9c9c] text-[18px]">
                                Resum&#233;
                            </div>
                        </a>
                        <a href="https://www.parchment.com/u/award/95d7dc7f49b6813fab2a29af0ad7adc4" target="_blank" className="block no-underline text-inherit">
                            <div className="h-[50px] w-[170px] whitespace-nowrap 
                                rounded-[24px] border-[2px] border-[#494946] mx-[6px] bg-[#262625]
                                flex items-center justify-center font-bold hover:bg-[#464645]
                                hover:border-[#999996] transition-all duration-200 ease-in-out active:bg-[#9c9c9c] text-[18px]">
                                Diploma
                            </div>
                        </a>
                    </div>
                </div>
            </>
        )
    },
];

export default homeItems;