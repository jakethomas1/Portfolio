import { useRef, useEffect } from 'react';


const HomeViewComponent = () => {
    const home_div = useRef(null);
    const bio1 = `What started off as competitive interest in Math, led to a fire for Math, Physics, and Computers.`;
    const bio2 = `Now, I have just recently graduated from CSU San Marcos with a B.S. Computer 
        Science.`;
        //bio3 should be link to resume
    const videoRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (videoRef.current) {
                    if (entry.isIntersecting) {
                        videoRef.current.play();
                    } else {
                        videoRef.current.pause();
                    }
                }
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);


    return (
        <>
            <div
                ref={home_div}
                id="homeview"
                className={`
                    relative top-0 left-0 h-[95vh] overflow-hidden text-gray-900
                    flex items-center justify-center z-10
                    bg-no-repeat bg-top bg-cover w-full
                    shadow-[inset_0_0px_6px_rgba(0,0,0,0.1)]
                    flex flex-row border-b-[1px] border-white bg-[#bccccc]`}
            >

                <div className="w-1/2 h-full relative flex justify-center border-r-[1px] border-white bg-[#000]">
                    <video
                        ref={videoRef}
                        className="absolute top-0 left-0 w-full h-full object-cover border-r-[1px] solid border-[rgba(0,0,0,.5)] opacity-50"
                        loop muted playsInline
                        onLoadedMetadata={(e) => e.target.playbackRate = .5}
                    >
                        <source src="/assets/spaceship.mp4" type="video/mp4"/>
                    </video>
                    <div id="spaceship_quote_container" className="absolute z-40 bottom-50/100 w-auto flex justify-center px-2 rounded-[2px]">
                        <div id="spaceship_quote" className="relative text-[#ffffff] text-[48px] font-bold"></div>
                    </div>
                    <div id="home_link_container" className="absolute z-40 bottom-25/100 w-100/100 flex justify-center">
                        <a className="home_links text-[#ffffff] text-[20px] font-semibold mx-4 px-12 bg-blue-600 rounded-[4px] py-2">Github</a>
                        <a className="home_links text-[#ffffff] text-[20px] font-semibold mx-4 px-12 bg-blue-600 rounded-[4px] py-2">LinkedIn</a>
                    </div>
                </div>
                <div className="relative w-1/2 h-full bg-[#181818] vignette border-l-[1px] border-black">
                    <div id="homepage_text_container" className="text-white text-[18px] absolute top-[45%] left-[50%] translate-[-50%] flex flex-col items-center">
                        {bio1}
                        <div className="h-[40px] w-full"></div>
                        <div className="h-[2px] w-80/100 bg-[#fff]"></div>
                        <div className="h-[40px] w-full"></div>
                        {bio2}
                        
                        
                    </div>
                    <div id="homepage_link_container" className="text-white absolute top-[70%] left-[50%] translate-[-50%] flex flex-row items-center">
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

            </div>
        </>
    )
}

export default HomeViewComponent;