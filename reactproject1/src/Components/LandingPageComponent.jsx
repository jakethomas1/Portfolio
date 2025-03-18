import React, {useRef, useState, useEffect } from 'react';

const LandingPageComponent = () => {
    const landingdiv = useRef(null);

    const [hasLoaded, setHasLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setHasLoaded(true);
        }, 1000);
        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    const loadAnimEnd = () => {
        landingdiv.current.style.display = 'none';
    }
    
    return (
        <>
            <div
                ref={landingdiv}
                id="landing_page"
                className={`
                    ${hasLoaded ? 'animate-slide-up' : ''}
                    fixed top-0 left-0 w-screen h-screen overflow-hidden text-gray-900
                    flex items-center justify-center z-50 bg-[#40826D]`}
                style={{ width: '100%', height: '100%', }}
                onAnimationEnd={loadAnimEnd}>
                <div className="titleBox flex flex-col items-middle">
                    <h1 id="nameplate" className="font-semibold"> Jacob Thomas </h1>
                    <h3 id="titleplate" className="font-semibold"> Software Developer </h3>
                </div>
            </div>
        </>
            );
};

export default LandingPageComponent;