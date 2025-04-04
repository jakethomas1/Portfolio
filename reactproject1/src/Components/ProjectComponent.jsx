import React from 'react';

// eslint-disable-next-line no-unused-vars
const ProjectComponent = ({ name, script, language, description, image, video }) => {
    return (
        <div className="relative flex items-center justify-center rounded-[4px] flex-col h-[500px] w-[500px] hover:translate-y-[-5px] transition-all duration-200 ease-in-out group">
            
            <div className="relative w-100/100 h-8/12 top-0 border-t-[2px] rounded-[4px] shadow-[0_2px_2px_1px_rgba(0,0,0,.8)] bg-initial"
                    style={{ backgroundImage: `url(/assets/${image})` }}></div>
            <div className="flex flex-row relative w-100/100 h-3/12 bottom-0  border-[rgba(90,90,90,1)] text-left">
                <div className="w-[64px] mx-[8px] h-fill bg-[#000] mt-[8px]"></div>
                <div className="w-full  h-full flex flex-col">
                    <div className="h-2/5 text-[24px] font-['Roboto','Arial',sans-serif]  text-left content-center">{name}</div>
                    <div className="h-3/5">{description}</div>
                </div>
                
            </div>
            </div>
    )
}//Add media query breakpoints for size, also 

export default ProjectComponent;/*nice purple: [rgba(105,85,125,1)] */