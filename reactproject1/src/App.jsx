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

function App() {
    const [timelineRef, inView] = useIntObs(0.5, false);
    const [offset, setOffset] = useState(50);
    const [timeline_step, timeline_min_offset] = [300, 50];
    const timeline_max_offset = (TimelineData.milestones.length - 2) * -timeline_step + 50;
    const [quote, author] = ["\"Elegance is not a dispensable luxury, but a crucial matter that decides between success and failure.\"", "Edsger W. Dijkstra"];
    const [scollerRef, scrollerProgress] = useSectionInView();
    const [tlRef, tlProgress] = useSectionInView();
    return (
        <>
            <TitleComponent />
            <LandingPageComponent />
            <NavBarComponent />
            <div id="booster" className="w-full h-[50vh] bg-[#141414]"></div>
            <div ref={scollerRef} id="scroll_container" className="w-full h-[175vh] bg-[#976b47] pt-[400px]  overflow-visible">
                <div id="sticky_elem" className="sticky top-8/100 w-[500px] h-[250px] bg-orange-400 text-left pl-[40px]"
                    style={{ opacity: scrollerProgress }}>
                    <div className="text-bold text-[32px] ">Titular Achievement #3 </div>
                    <br></br>
                    <div className="text-[24px] ">And here are the details. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</div>
                </div>
            </div>
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
                    className="relative h-[3000px] w-full bg-green-400 overflow-visible"
                    ref={tlRef}            >
                
                <div
                    id="timelineview_container"
                    ref={timelineRef}
                    className={`sticky top-[8vh] min-h-[92vh] w-full flex justify-center overflow-hidden items-center transition-all duration-1500 ease-in-out ${!inView ? 'bg-[#6b667d]' : 'bg-[#7D666D]'}`}>
                    <div id="timeline_title_text" className={`absolute top-[12px] z-12 text-[63px] font-semibold font-[Khula] transition-opacity duration-750 ease-in-out ${!inView ? 'opacity-0' : 'opacity-100'}`}>Experience</div>
                    <div id="timeline_window" className={`absolute min-w-[1000px] max-w-[1000px] h-[800px] overflow-hidden transition-transform duration-1500 ease-in-out ${!inView ? 'bg-[#6b667d]' : 'bg-[#7D666D]'}`}
                        style={{
                            maskImage: 'linear-gradient(to right, transparent 0%, black 100px, black 900px, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 100px, black 900px, transparent 100%)',
                        }}>
                    
                        <div
                            id="timelineview"
                            className={`z-5 flex flex-row items-center relative min-w-max h-full transition-transform duration-500 ease-in-out`} 
                            style={{ transform: `translateX(${offset}px)` }}>
                                {TimelineData.milestones.map((milestone, index) => (
                                    <TimelineComponent key={index} index={index} {...milestone} />
                                ))}
                        </div>
                        <div id="timeline_bar" className="h-[4px] w-full absolute bg-black top-[50%] -translate-y-[50%]"></div>
                    </div>
                    
                    
                </div>
            </div>
            <div id="footer" className="bg-[#c1c1c1] w-full h-[320px] shadow-[0_-2px_18px_rgba(0,0,0,.3)] relative z-10"></div>
            <div class="text-style">TEXT</div>
        </>
    );
}

export default App;
/*bg-[#E6E6FA]*/
/*
after #timeline_bar
<TimelineBtnComponent timeline_step={-timeline_step} timeline_max_offset={timeline_max_offset} position="right" setOffset={setOffset} />
                    <TimelineBtnComponent timeline_step={timeline_step} timeline_max_offset={timeline_min_offset} position="left" setOffset={setOffset} />*/