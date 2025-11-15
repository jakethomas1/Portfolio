import React from 'react';
import ProjectData from '../data/project_data.json'
import ConsoleComponent from './ConsoleComponent';
import ProjectComponent from './ProjectComponent';

export default function ProjectsViewComponent({ projectsRef }) {
    const [quote, author] = ["\"Elegance is not a dispensable luxury, but a crucial matter that decides between success and failure.\"", "Edsger W. Dijkstra"];
    return (
        <div ref={projectsRef} id="projectsview" className="bg-[#040203] shadow-[0_2px_18px_rgba(0,0,0,.3)] relative z-10">
            <div id="projectsview_container" className="pt-[16px] pb-[18px] bg-[#040203]">
                <div className="w-full h-auto border-[white] border-b-[2px] text-left
                                mx-auto w-full md:max-w-[751px] [@media(min-width:1049px)]:max-w-[1032px] [@media(min-width:1581px)]:max-w-[1564px]">
                    <span className="montserr pl-[8px] text-[42px]">Projects</span>
                </div>
                <div
                    id="ProjectsComponent_container"
                    className="flex flex-col justify-center items-center md:grid md:grid-cols-[repeat(auto-fit,minmax(500px,1fr))] 
                                    gap-x-[32px] gap-y-22 pt-32 pb-42 mx-auto w-full md:max-w-[751px]
                                    [@media(min-width:1049px)]:max-w-[1032px] [@media(min-width:1581px)]:max-w-[1564px]
                                    place-items-center">
                    
                    {ProjectData.projects.map((project, index) => (
                        <ProjectComponent key={index} {...project} />
                    ))}
                </div>
                <div className="flex w-full relative justify-center text-[#aaa]">
                    <div className="relative flex flex-col w-[320px] md:w-[440px] text-left">{quote}
                        <div className="text-right">{author}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
