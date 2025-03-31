import { useRef, useEffect } from 'react';

const HomeViewComponent = () => {
    const home_div = useRef(null);
    const bio1 = `What started off as competitive interest in Math, led to a fire for Math, Physics, and Computers.`;
    const bio2 = `Now, I have just recently graduated from CSU San Marcos with a B.S Computer 
        Science`;
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
            { threshold: 0.2 } // Adjust threshold as needed
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
                    flex flex-row border-b-[1px] border-white`}
            >
                <div className="w-3/5 h-full relative flex justify-center border-r-[1px] border-white">
                    <video
                        ref={videoRef}
                        className="absolute top-0 left-0 w-full h-full object-cover border-r-[1px] solid border-[rgba(0,0,0,.5)]"
                        loop muted playsInline
                        onLoadedMetadata={(e) => e.target.playbackRate = 0.85}
                    >
                        <source src="/assets/spaceship.mp4" type="video/mp4"/>
                    </video>
                    <div id="spaceship_quote_container" className="absolute z-40 bottom-50/100 w-auto">
                        <div id="spaceship_quote" className="relative text-[#ffffff] text-[48px] font-bold"></div>
                    </div>
                    <div id="home_link_container" className="absolute z-40 bottom-25/100 w-100/100 flex justify-center">
                        <a className="home_links">Github</a>
                        <a className="home_links">LinkedIn</a>
                    </div>
                </div>
                <div className="w-2/5 h-full bg-[#424549] vignette border-l-[1px] border-black"></div>
            </div>
        </>
    )
}

export default HomeViewComponent;