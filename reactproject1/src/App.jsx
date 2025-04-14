import "./App.css";
import "./config.css";
import LandingPageComponent from "./Components/LandingPageComponent";
import TitleComponent from "./Components/TitleComponent";
import NavBarComponent from "./Components/NavBarComponent";
import HomeViewComponent from "./Components/HomeViewComponent";
import ProjectComponent from './Components/ProjectComponent';
import ConsoleComponent from './Components/ConsoleComponent';
import TimelineComponent from './Components/TimelineComponent'
import ProjectData from './project_data.json'
import TimelineData from './timeline_data.json'
import { useIntObs } from './utils/useIntObs';
import { useState } from "react";



function App() {
    const [timelineRef, inView] = useIntObs(0.5, false);
    const [offset, setOffset] = useState(0);
    const [timeline_step, timeline_min_offset] = [300, 0];
    const timeline_max_offset = (TimelineData.milestones.length-2) * -timeline_step;
    return (
        <>
            <TitleComponent />
            <LandingPageComponent />
            <NavBarComponent />
            <HomeViewComponent />
            <div id="projectsview" className="bg-[#0f0f0f] shadow-[0_2px_18px_rgba(0,0,0,.3)] relative z-10">
                <div id="projectsview_container" className="py-[10px]">
                    <ConsoleComponent />
                    <div
                        id="ProjectsComponent_container"
                            className="flex flex-col justify-center items-center md:grid md:grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-x-[32px] gap-y-22 pt-32 pb-42 mx-auto w-full 
                                        md:max-w-[751px] [@media(min-width:1049px)]:max-w-[1032px] [@media(min-width:1581px)]:max-w-[1564px] place-items-center">
                        {ProjectData.projects.map((project, index) => (
                            <ProjectComponent key={index} {...project} />
                        ))}
                    </div>
                    <div className="flex w-full relative justify-center text-[#aaa]">
                        <div className="relative flex flex-col w-[320px] md:w-[440px] text-left">"Elegance is not a dispensable luxury, but a crucial matter that decides between success and failure."
                            <div className="text-right">Edsger W. Dijkstra</div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="timelineview_container"
                ref={timelineRef}
                className={`relative h-full w-full flex justify-center overflow-hidden items-center min-h-[125vh] transition-all duration-1500 ease-in-out ${inView ? 'bg-[#6b667d]' : 'bg-white'}`}>
                <div id="timeline_window" className="absolute min-w-[1000px] max-w-[1000px] h-[400px] overflow-hidden"
                    style={{
                        backgroundColor: '#6b667d', // Set the background color to your desired one
                        maskImage: 'linear-gradient(to right, transparent 0%, black 100px, black 900px, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 100px, black 900px, transparent 100%)',
                    }}>
                    
                    <div
                        id="timelineview"
                        className={`z-5 flex flex-row relative min-w-max h-[400px] transition-transform duration-500 ease-in-out`} 
                        style={{ transform: `translateX(${offset}px)` }}>
                            {TimelineData.milestones.map((milestone, index) => (
                                <TimelineComponent key={index} index={index} {...milestone} />
                            ))}
                    </div>
                </div>
                <div id="timeline_bar" className="h-[4px] w-8/10 absolute bg-black top-[50%] -translate-y-[50%]"></div>
                <div
                    id="timeline_btn"
                    className="flex justify-end items-center absolute min-w-[200px] max-w-[200px] h-full right-0 hover:bg-[rgba(255,255,255,.1)] group"
                    onClick={() => setOffset(prev => Math.max(prev - timeline_step, timeline_max_offset))}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-chevron-right w-14 h-18 text-black group-hover:text-[#ccc] mr-[16px]"
                        viewBox="0 0 16 16"
                        preserveAspectRatio="none">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>
            </div>
            <div id="footer" className="bg-[#c1c1c1] w-full h-[320px] shadow-[0_-2px_18px_rgba(0,0,0,.3)] relative z-10"></div>
        </>
    );
}

export default App;
