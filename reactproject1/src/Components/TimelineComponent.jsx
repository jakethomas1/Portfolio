import { useMemo } from 'react';

const TimelineComponent = ({ index, year, title, description }) => {
    const randomOffset = useMemo(() => {
        return Math.floor(Math.random() * (200 - 50 + 1)) + 50;
    }, []); // Empty deps = runs only once per mount
    const marginStyle = index % 2
        ? {
            marginTop: `${randomOffset}px`,
            transform: "translateY(0%)" }  
        : {
            marginBottom: `${randomOffset}px`, /* NOTE: INDEX STARTS AT ZERO... so this is for: first, third... odds... above timeline_bar*/
            transform: "translateY(-100%)" };
    return (
        
        <div className="relative"
            style={{
                marginLeft: index === 0 ? 0 : -100, // Overlap horizontally
                zIndex: 10 - index,
            }} >
            <div className={`relative w-[250px] h-fit bg-[#242424] border-[2px] border-[#a4a4a4] rounded-[12px] translate-y-[50%] p-[8px]`}
                style={marginStyle}>
                {year}<br></br>{title}<br></br>{description}
            </div>
            <div id="timeline_tick_mark" className={`w-[4px] bg-black absolute top-0 left-1/2 top-1/2 -translate-y-1/2 z-15`}
                style={{
                    height: `${randomOffset / 2}px`,
                    transform: `${index % 2 == 0 ? 'translateY(-50%)' : 'translateY(50%)'}`,
                }}></div>
        </div>
            
    )
}

export default TimelineComponent;
