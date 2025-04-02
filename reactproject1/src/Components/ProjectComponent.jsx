import React from 'react';

const ProjectComponent = ({ number, text }) => {
    return (
        <div className="relative  flex items-center justify-between rounded-[4px] flex-col h-[500px] w-[500px]">
            <div className="relative w-100/100 h-8/12 top-0 bg-[rgba(105,85,125,1)] border-t-[2px] rounded-[4px]"></div>
            <div className="flex flex-row relative w-100/100 h-3/12 bottom-0 bg-[rgba(255,255,255,.1)] border-t-[1px] border-[rgba(90,90,90,1)] text-left">
                <div className="w-[64px] mx-[8px] h-full bg-[#000]"></div>
                <div className="w-full  h-full flex flex-col">
                    <div className="h-1/2 text-[24px] font-['Roboto','Arial',sans-serif] bg-blue-500">{text}</div>
                    <div className="h-1/2 bg-red-500">{number}</div>
                </div>
                
            </div>
            </div>
    )
}//Add media query breakpoints for size, also 

export default ProjectComponent;/*nice purple: [rgba(105,85,125,1)] */