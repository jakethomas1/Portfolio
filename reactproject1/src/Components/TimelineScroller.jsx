// TimelineScroller.jsx
import { useEffect } from "react"
import { animate, scroll, spring } from "motion"
import TimelineWindow from "./TimelineWindow"
import { TextScrambleComponent } from './TextScrambleComponent';

export default function TimelineScroller({ tlRef, aboutRef }) {
    useEffect(() => {
        if (!aboutRef?.current) return

        const items = aboutRef.current.querySelectorAll(".timeline-item")

        // Scroll-linked horizontal animation
        scroll(
            animate("#timelineview",
                {
                    transform: [`translateX(500px)`, `translateX(-2200px)`]
                },),
            { target: document.querySelector("#timelineview_container_scroller") }
        )

        scroll(
            animate("#timelineview_container", {
                backgroundColor: ["#040203", "#2a1945"],
            }),
            { target: document.querySelector("#timelineview_container_scroller") }
        )
    }, [aboutRef])

    return (
        <div
            ref={tlRef}
            id="timelineview_container_scroller"
            className="relative h-[3000px] w-full overflow-visible"
        >

            <div
                id="timelineview_container"
                className="sticky top-0 md:top-[8vh] min-h-[100vh] w-full flex justify-center overflow-hidden items-center transition-background duration-250 --ease-snappy"
            >
                <div
                    id="timeline_title_text"
                    className="absolute top-[12px] transition-opacity delay-900 duration-550 ease-in-out"
                >
                    <TextScrambleComponent />
                </div>

                <TimelineWindow tlRef={aboutRef} />
            </div>
        </div>
    )
}
