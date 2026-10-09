import React from 'react';
import ProjectData from '../data/project_data.json'
import ConsoleComponent from './ConsoleComponent';
import ProjectComponent from './ProjectComponent';
import SectionHeaderComponent from './SectionHeaderComponent';

export default function ProjectsViewComponent({ projectsRef }) {
    const [quote, author] = ["\"Elegance is not a dispensable luxury, but a crucial matter that decides between success and failure.\"", "Edsger W. Dijkstra"];
    return (
        <div ref={projectsRef} id="projectsview" className="bg-[#040203] shadow-[0_2px_18px_rgba(0,0,0,.3)] relative z-10">
            <div id="projectsview_container" className="pt-[16px] pb-[18px] bg-[#040203]">
                <SectionHeaderComponent header_text="Completed Projects" />
                <div
                    id="ProjectsComponent_container"
                    className="flex flex-col justify-center items-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                                    gap-x-[32px] gap-y-22 pt-16 pb-32 w-full items-stretch
                                    place-items-center">
                    
                    {ProjectData.projects.map((project, index) => (
                        <ProjectComponent key={index} {...project} />
                    ))}
                </div>
                <div id="notable_quote" className="flex w-full relative justify-center text-[#aaa] pt-10 pb-1">
                    <div className="relative flex flex-col w-[320px] md:w-[440px] text-left">{quote}
                        <div className="text-right">{author}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
