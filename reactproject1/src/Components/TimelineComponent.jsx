import { useMemo } from 'react';

const TimelineComponent = ({ index, year, title, description }) => {
    const randomOffset = useMemo(() => {
        return Math.floor(Math.random() * (130)) + 50;
    }, []); // useMemo and empty deps = runs only once per mount
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
            <div className={`relative w-[250px] h-fit text-black font-[600] bg-[#e4e6f1] border-[2px] 
                             border-[#a4a4a4] rounded-[4px] translate-y-[50%]  pb-[8px] pt-[0px] z-10`}
                style={marginStyle}>
                <div className="text-right pr-[6px] text-[#555]">{year}</div>
                <div className="text-left font-bold px-[8px] pb-[4px] text-[15px]">{title}</div>   
                <div className="text-left text-[16px] px-[8px]">{description}</div>
            </div>
            <div id="timeline_tick_mark" className={`w-[4px] bg-[#535353] absolute top-0 left-1/2 top-1/2 -translate-y-1/2 z-15`}
                style={{
                    height: `${randomOffset / 2}px`,
                    transform: `${index % 2 == 0 ? 'translateY(-50%)' : 'translateY(50%)'}`,
                }}></div>
        </div>
            
    )
}

export default TimelineComponent;
