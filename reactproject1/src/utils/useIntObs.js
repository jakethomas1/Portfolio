import { useState, useRef, useEffect } from 'react';

export const useIntObs = (threshold = 0.5, once = true) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const currentElement = ref.current;
        if (!currentElement) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                if (once) {
                    observer.unobserve(entry.target);
                }
            }
        }, { threshold });

        observer.observe(currentElement);

        return () => {
            observer.unobserve(currentElement);
        };
    }, [threshold, once]);

    return [ref, inView];
};

