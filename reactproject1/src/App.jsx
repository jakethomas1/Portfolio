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
import TimelineBtnComponent from "./Components/TimelineBtnComponent";
import TimelineScrollComponent from "./Components/TimelineScrollComponent"
import { useSectionInView } from './utils/useSectionInView';
import { TextScrambleComponent } from './Components/TextScrambleComponent';
import { interpolate } from './utils/interpolate'
function App() {
    const [timelineRef, inView] = useIntObs(0.5, false);
    const [quote, author] = ["\"Elegance is not a dispensable luxury, but a crucial matter that decides between success and failure.\"", "Edsger W. Dijkstra"];
    const [tlRef, tlProgress] = useSectionInView();

    

    return (
        <>
            <TitleComponent />
            <LandingPageComponent />
            <NavBarComponent />
            <HomeViewComponent />
            <div id="projectsview" className="bg-[#0f0f0f] shadow-[0_2px_18px_rgba(0,0,0,.3)] relative z-10">
                <div id="projectsview_container" className="pt-[16px] pb-[18px] bg-[#040203]">
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
                        <div className="relative flex flex-col w-[320px] md:w-[440px] text-left">{quote}
                            <div className="text-right">{author}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="timelineview_container_scroller"
                className={`relative h-[2500px] w-full ${!inView ? 'bg-[#6b667d]' : 'bg-[#7D666D]'} overflow-visible`}
                    ref={tlRef}            >
                
                <div
                    id="timelineview_container"
                    ref={timelineRef}
                    className={`sticky top-[8vh] min-h-[92vh] w-full flex justify-center overflow-hidden items-center transition-background duration-1500 ease-in-out ${!inView ? 'bg-[#6b667d]' : 'bg-[#7D666D]'}`}>
                    <div id="timeline_title_text" className={`absolute top-[12px] z-12 transition-opacity duration-750 ease-in-out ${!inView ? 'opacity-0' : 'opacity-100'}`}>
                        <TextScrambleComponent />
                    </div>
                    <div id="timeline_window" className={`absolute min-w-8/10 max-w-8/10 h-[800px] overflow-hidden transition-background duration-1500 ease-in-out ${!inView ? 'bg-[#6b667d]' : 'bg-[#7D666D]'}`}
                        style={{
                            maskImage: 'linear-gradient(to right, transparent 0%, black 9%, black 91%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 9%, black 91%, transparent 100%)',
                        }}>
                    
                        <div
                            id="timelineview"
                            className={`z-5 flex flex-row items-center relative min-w-max h-full transition-transform duration-500 ease-in-out`} 
                            style={{ transform: `translateX(${interpolate(150, -1600, tlProgress)}px)` }}>
                                {TimelineData.milestones.map((milestone, index) => (
                                    <TimelineComponent key={index} index={index} {...milestone} />
                                ))}
                        </div>
                        <div id="timeline_bar" className="h-[4px] w-full absolute bg-black top-[50%] -translate-y-[50%]"></div>
                    </div>
                    
                    
                </div>
            </div>
            <div id="footer" className="bg-[#c1c1c1] w-full h-[320px] shadow-[0_-2px_18px_rgba(0,0,0,.3)] relative z-10"></div>
        </>
    );
}

export default App;
/*bg-[#E6E6FA]*/
/*
after #timeline_bar
<TimelineBtnComponent timeline_step={-timeline_step} timeline_max_offset={timeline_max_offset} position="right" setOffset={setOffset} />
                    <TimelineBtnComponent timeline_step={timeline_step} timeline_max_offset={timeline_min_offset} position="left" setOffset={setOffset} />*/
                    /*update*/