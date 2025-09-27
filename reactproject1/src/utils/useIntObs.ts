import { useState, useRef, useLayoutEffect, type RefObject } from 'react';

export const useIntObs = (threshold = 0.5, once = true) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null); // to keep observer instance across renders

    useLayoutEffect(() => {
        const currentElement = ref.current;
        if (!currentElement) return;

        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                console.log('Element:', entry.target);               // the DOM element being observed
                console.log('intersectionRatio:', entry.intersectionRatio);
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once && observerRef.current) {
                        observerRef.current.disconnect();
                    }
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold }
        );

        observerRef.current.observe(currentElement);

        return () => {
            observerRef.current?.disconnect();
        };
    }, [threshold, once]);

    return [ref, inView];
};
