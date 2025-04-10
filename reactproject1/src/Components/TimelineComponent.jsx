import {  useRef, useState, useEffect } from 'react';

const TimelineComponent = () => {
    /*CLEAN OBSERVER*/
    const timelineRef = useRef(null);
    const [inView, setInView] = useState(false);
    
    useEffect(() => {
        const currentElement = timelineRef.current;
        if (!currentElement) return; //slightly redundant, good if component may change to avoid null references

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.5 });

        observer.observe(currentElement);

        return () => {
            observer.unobserve(currentElement);
        };
    }, []);
    /*CLEAN OBSERVER*/
    return (
        <>
            <div ref={timelineRef} className={`min-h-[125vh] w-full transition-all duration-1500 ease-in-out ${inView ?  'bg-[#6b667d]' : 'bg-white'}`}
                >
                <div className="w-full h-full">
                    
                </div>
            </div>
        </>
    )
}

export default TimelineComponent;

/*    const [bgColor, setBgColor] = useState('rgb(140,140,140)');
    
    const isVisible = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (timelineRef.current && isVisible.current) {
                const { top, height } = timelineRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;              
                const elementCenter = top + height / 2;
                const windowCenter = windowHeight / 2;
                const distanceFromCenter = Math.abs(windowCenter - elementCenter);
                const normalizedDistance = Math.min(distanceFromCenter / (windowHeight / 2), 1);
                const colorValue = Math.max(140, Math.min(Math.round(255 * (1-normalizedDistance)), 200));
                setBgColor(`rgb(${colorValue}, ${colorValue}, ${colorValue})`);
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible.current = entry.isIntersecting;
                if (isVisible.current) {
                    window.addEventListener('scroll', handleScroll);
                    handleScroll(); // Set initial background color
                } else {
                    window.removeEventListener('scroll', handleScroll);
                    setBgColor('rgb(140,140,140)'); // Reset to default color when not visible
                }
            },
            { threshold: 0.25 }
        );

        if (timelineRef.current) {
            observer.observe(timelineRef.current);
        }

        return () => {
            if (timelineRef.current) {
                observer.unobserve(timelineRef.current);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    */
