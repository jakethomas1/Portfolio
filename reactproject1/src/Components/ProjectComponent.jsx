import React from 'react';
import IconDisplayComponent from "./IconDisplayComponent";
// eslint-disable-next-line no-unused-vars
const ProjectComponent = ({ index, name, script, languages, description, image, video }) => {
    return (
        <div id="ProjectComponent_root" className="relative flex items-center justify-center flex-col w-[316px] h-[440px] md:h-[480px] md:w-[500px] 
                                                   group cursor-pointer">
            <div className="relative w-100/100 h-8/12 top-0 border-t-[2px] border-[rgba(150,150,150,1)] rounded-[8px] 
                            shadow-[0_2px_2px_1px_rgba(0,0,0,.8)] bg-initial mb-[6px] group-hover:rounded-none 
                            "
                    style={{ backgroundImage: `url(/assets/${image})` }}></div>
            <div className="flex flex-col relative w-100/100 h-3/12 bottom-0  border-[rgba(90,90,90,1)] text-left">
                {/* NOTE: THERE SHOULD BE A .MAP HERE IF THE PROJECT WERE TO USE MULTIPLE LANGUAGES (WHICH MOST DO... ALTHOUGH i THINK 3 LANGS MAY BREAK... NEED TO CONCAT LANG NAMES?) */}
                <div id="programming_icon_container" className="h-full  mt-[8px] ">
                    <div id="program_lang_item"         
                        className="flex flex-row items-center border-[1px] border-[#aaa] w-auto inline-flex rounded-[4px] bg-[rgba(200,200,200,.08)]">
                        <div className="ml-[8px] w-[16px]"><IconDisplayComponent key={index} languages={languages} /></div>
                        <div className="mx-[8px]">{languages}</div>
                    </div> 
                </div>
                <div className="w-full  h-full flex flex-col">
                    <div className="h-1/3 text-[24px] font-['Roboto','Arial',sans-serif]  text-left items-center mb-[6px]">{name}</div>
                    <div className="h-2/3 pr-[6px] leading-[1.1] mb-[6px]">{description}</div>
                </div>
                <div id="project_button_container"
                    className="flex justify-end gap-x-4">
                    <a
                        id="github_button"
                        
                        target="_blank"
                        rel="noopener noreferrer"
                        
                        className="inline-flex flex-row py-[1px] content-center px-[12px] bg-[#0d0d0e] text-[14px] text-[white] border-[rgb(32,33,38)] 
                        cursor-pointer hover:border-[#ff6347] transition-colors ease-in-out duration-300 rounded-[4px] border-[.55px]
                        font-['Source_Code_Pro'] font-[600] tracking-[1.77px] leading-[32px] select-none items-center">
                        <svg className="h-[24px] w-[24px]" aria-hidden="true" viewBox="0 0 24 24" version="1.1" data-view-component="true" fill="white">
                            <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
                        </svg>
                        <div className="ml-[7px]">GitHub</div>
                    </a>
                    <div id="demo_button"

                        target="_blank"
                        rel="noopener noreferrer"

                        className="inline-flex flex-row py-[1px] content-center px-[12px] bg-[rgba(224,224,234,.9)] text-[14px] text-[white] border-[rgb(32,33,38)] 
                        cursor-pointer hover:border-[#ff6347] transition-colors ease-in-out duration-300 rounded-[4px] border-[.55px]
                        font-['Source_Code_Pro'] font-[600] tracking-[1.77px] leading-[32px] select-none items-center">
                        <svg className="w-[16px] h-[16px]"
                            viewBox="0 0 330 330" space="preserve">
                            <path id="XMLID_308_" d="M37.728,328.12c2.266,1.256,4.77,1.88,7.272,1.88c2.763,0,5.522-0.763,7.95-2.28l240-149.999
	                            c4.386-2.741,7.05-7.548,7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95,2.28c-4.625-2.891-10.453-3.043-15.222-0.4
	                            C32.959,4.524,30,9.547,30,15v300C30,320.453,32.959,325.476,37.728,328.12z"/>
                        </svg>
                        <div className="ml-[7px] text-black">Video Demo</div>
                    </div>
                </div>
            </div>
        </div>
    )
}//Add media query breakpoints for size, also 

export default ProjectComponent;/*nice purple: [rgba(105,85,125,1)] */