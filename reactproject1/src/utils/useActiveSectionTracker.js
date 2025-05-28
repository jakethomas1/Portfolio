import { useEffect, useRef } from 'react';

export default function useActiveSectionTracker({
    homeInView,
    projectsInView,
    aboutInView,
    contactInView,
    setActiveSection,
}) {
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            const inViewSections = [
                { key: 'contact', inView: contactInView }, // ?? Higher priority
                { key: 'about', inView: aboutInView },
                { key: 'projects', inView: projectsInView },
                { key: 'home', inView: homeInView },
            ];

            const active = inViewSections.find((section) => section.inView)?.key;

            if (active) {
                setActiveSection((prev) => (prev !== active ? active : prev));
            }
        }, 100); // debounce delay

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [homeInView, projectsInView, aboutInView, contactInView, setActiveSection]);
}
