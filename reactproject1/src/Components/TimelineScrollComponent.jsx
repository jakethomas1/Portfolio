import React, { useEffect, useRef } from 'react';

const TimelineScroll = () => {
    const elementsRef = useRef([]);
    const animationFrameId = useRef(null);

   
    const totalScrollHeight = 7000; // Total scrollable height in pixels

    // Function to update the position of each timeline item
    const updatePositions = () => {
        const scrollY = window.scrollY;
        const scrollProgress = Math.min(scrollY / totalScrollHeight, 1); // Normalize scroll progress between 0 and 1

        elementsRef.current.forEach((el, index) => {
            if (el) {
                const staggerDelay = index * -.3; // Adjust this value for more or less stagger
                const adjustedProgress = Math.max(scrollProgress - staggerDelay, 0);
                const translateX = -adjustedProgress * 100; // Translate percentage

                el.style.transform = `translateX(${translateX}%)`;
            }
        });

        animationFrameId.current = requestAnimationFrame(updatePositions);
    };

    useEffect(() => {
        // Start the animation loop
        animationFrameId.current = requestAnimationFrame(updatePositions);

        // Clean up on unmount
        return () => {
            cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    return (
        <div id="timeline-scroll-wrapper" className="w-full h-[4000px] relative">
            <div className="w-full h-[1000px] relative flex flex-row overflow-clip">
                <div className="w-[250px] h-[250px] bg-green-200 mx-[3vw] my-[3vh] sticky top-[15px]"></div>
                <div className="w-[250px] h-[1250px] bg-green-400 mx-[3vw] my-[3vh] relative top-[15px]"></div>
            </div>
        </div>
    );
};

export default TimelineScroll;


/*
<div className="sticky flex flex-row h-[100vh] top-0 w-full">
    {Array.from({ length: elementsCount }).map((_, index) => (
        <div
            key={index}
            ref={(el) => (elementsRef.current[index] = el)}
            className="sticky flex h-[100vh] flex-shrink-0 items-center justify-center text-[2rem] font-bold transition-transform duration-100"
            style={{
                width: `${elementWidthVW}vw`,
                backgroundColor: `hsl(${index * 60}, 70%, 80%)`,
            }}
        >
            Timeline Item {index + 1}
        </div>
    ))}
</div>


 style={{ height: `${elementsCount * 130 }vh` }}
*/