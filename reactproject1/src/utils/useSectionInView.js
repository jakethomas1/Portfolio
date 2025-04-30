import { useEffect, useRef, useState } from 'react';

export const useSectionInView = () => {
    const ref = useRef(null);
    const [progress, setProgress] = useState(0);
    const frame = useRef(null);

    useEffect(() => {
        let isVisible = false;

        const updateProgress = () => {
            if (!ref.current || !isVisible) return;

            const rect = ref.current.getBoundingClientRect();
            const scrollStart = 0;
            const scrollEnd = window.innerHeight - rect.height; 
            const scrollRange = scrollStart - scrollEnd;
            const current = scrollStart - rect.top;

            const ratio = Math.min(1, Math.max(0, current / scrollRange));
            setProgress(ratio);

            frame.current = requestAnimationFrame(updateProgress);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible) {
                    frame.current = requestAnimationFrame(updateProgress);
                } else {
                    cancelAnimationFrame(frame.current);
                    setProgress(0);
                }
            },
            { threshold: [0, 1] }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            cancelAnimationFrame(frame.current);
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return [ref, progress];
};


