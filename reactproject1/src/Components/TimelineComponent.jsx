
const TimelineComponent = ({ index, year, title, description }) => {
   
    return (
        <>
            <div className={`mx-[25px] relative w-[250px] h-[180px] bg-[#242424] border-[2px] border-[#a4a4a4] rounded-[12px] ${index % 2 ? 'mb-auto' : 'mt-auto'}`}>
                {year}<br></br>{title}<br></br>{description}
            </div>
        </>
    )
}

export default TimelineComponent;
