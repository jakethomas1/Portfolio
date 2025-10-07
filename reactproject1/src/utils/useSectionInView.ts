import { useRef } from "react";
import { useScroll } from "motion/react";

export const useSectionInView = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    // MotionValue tracking scroll progress of the ref container
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    return [ref, scrollYProgress] as const;
};
