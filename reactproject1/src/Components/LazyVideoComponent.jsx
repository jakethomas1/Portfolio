import React, { useRef, useEffect } from 'react';

const LazyVideoComponent = ({ src }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.playbackRate = 0.5;
        }
    }, []);

    const handleMouseEnter = () => {
        const video = videoRef.current;
        if (video) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    // Autoplay might be prevented
                    console.error('Error attempting to play:', error);
                });
            }
        }
    };

    const handleMouseLeave = () => {
        const video = videoRef.current;
        if (video) {
            video.pause();
            // Removed: video.currentTime = 0;
        }
    };

    return (
        <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-100 rounded-[8px]"
            loop
            muted
            playsInline
            autoPlay
            preload="metadata"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default LazyVideoComponent;
