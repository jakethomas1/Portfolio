// TimelineWindow.jsx

import TimelineComponent from "./TimelineComponent"
import TimelineData from "../data/timeline_data.json" // adjust path

export default function TimelineWindow({ tlRef }) {
    
    return (
        <div
            ref={tlRef}
            id="timeline_window"
            className="absolute min-w-8/10 max-w-8/10 h-[800px] overflow-hidden transition-background duration-1500 ease-in-out bg-[rgba(0,0,0,0)]"
            style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 9%, black 91%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 9%, black 91%, transparent 100%)",
            }}
        >
            <div
                id="timelineview"
                className="z-5 flex flex-row items-center relative min-w-max h-full  transition-transform duration-250 --ease-snappy"
            >
                {TimelineData.milestones.map((milestone, index) => (
                    <div className="timeline-item" key={index}>
                        <TimelineComponent index={index} {...milestone} />
                    </div>
                ))}
            </div>

            <div
                id="timeline_bar"
                className="h-[4px] w-full absolute bg-[#535353] top-[50%] -translate-y-[50%]"
            />
        </div>
    )
}
