import "./App.css";
import "./config.css";
import TitleComponent from "./Components/TitleComponent";
import NavBarComponent from "./Components/NavBarComponent";
import ProjectComponent from './Components/ProjectComponent';
import ConsoleComponent from './Components/ConsoleComponent';
import TimelineComponent from './Components/TimelineComponent'
import ProjectData from './project_data.json'
import TimelineData from './timeline_data.json'
import { useIntObs } from './utils/useIntObs';
import { useState } from "react";
import { useSectionInView } from './utils/useSectionInView';
import { TextScrambleComponent } from './Components/TextScrambleComponent';
import { interpolate, interpolateColors } from './utils/interpolate'
import SlideBioComponent from "./Components/SlideBioComponent"
import useActiveSectionTracker from "./utils/useActiveSectionTracker";
import FooterComponent from "./Components/FooterComponent";

function App() {
   
    //Note: threshold is calculated as follows:
    //  (desired % in view) / (section height in vh / 100vh)
    //  e.g. (.5) / (300vh / 100) = .1667 ... only applicable in sections larger than 100vh
    // note: projectsview has dynamic height, must get clever using absolute ele with height:calc(100%-100vh) basically the middlepoint marker
    const [homeRef, homeInView] = useIntObs(0.4, false); 
    const [projectsRef, projectsInView] = useIntObs(.4, false);
    const [aboutRef, aboutInView] = useIntObs(.4 , false); 
    const [footerRef, contactInView] = useIntObs(.4, false);
    const [activeSection, setActiveSection] = useState('home');
    //^ too many state variables
    useActiveSectionTracker({
        homeInView,
        projectsInView,
        aboutInView,
        contactInView,
        setActiveSection,
    });

    const [quote, author] = ["\"Elegance is not a dispensable luxury, but a crucial matter that decides between success and failure.\"", "Edsger W. Dijkstra"];
    const [tlRef, tlProgress] = useSectionInView();

    

    return (
        <>
            <TitleComponent />
            {/* Add renewed landing page component if desired*/ }
            <NavBarComponent activeBtn={activeSection} />
            <SlideBioComponent homeRef={homeRef} homeInView={homeInView}/>
            <div ref={projectsRef} id="projectsview" className="bg-[#040203] shadow-[0_2px_18px_rgba(0,0,0,.3)] relative z-10">
                <div id="projectsview_container" className="pt-[16px] pb-[18px] bg-[#040203]">
                    <ConsoleComponent />
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
            <div id="timelineview_container_scroller"
                className={`relative h-[3000px] w-full overflow-visible`}
                ref={tlRef}>
                <div id="timelineview_para_container"
                    className=""></div>
                <div
                    id="timelineview_container"
                    className={`sticky top-0 md:top-[8vh] min-h-[100vh] w-full flex justify-center overflow-hidden 
                                items-center transition-background duration-1500 ease-in-out
                                ${!aboutInView ? 'bg-[#191f23]' : 'bg-[#191f23]'}`}
                    style={{
                        backgroundColor: `${interpolateColors('#000', '#477998', tlProgress)}`,
                    }}                >
                    <div id="timeline_title_text" className={`absolute top-[12px] transition-opacity delay-900 duration-550 ease-in-out ${!aboutInView ? 'opacity-100' : 'opacity-100'}`}>
                        <TextScrambleComponent />
                    </div>
                    <div
                        ref={aboutRef}
                        id="timeline_window"
                        className={`absolute min-w-8/10 max-w-8/10 h-[800px] overflow-hidden transition-background duration-1500 ease-in-out bg-[rgba(0,0,0,0)]}`}
                        style={{
                            maskImage: 'linear-gradient(to right, transparent 0%, black 9%, black 91%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 9%, black 91%, transparent 100%)',
                        }}>
                    
                        <div
                            id="timelineview"
                            className={`z-5 flex flex-row items-center relative min-w-max h-full transition-transform duration-1000 ease-in-out `} 
                            style={{
                                transform: `translateX(${interpolate(650, -2200, tlProgress)}px)`,
                            }}>
                                {TimelineData.milestones.map((milestone, index) => (
                                    <TimelineComponent key={index} index={index} {...milestone} />
                                ))}
                        </div>
                        <div id="timeline_bar" className="h-[4px] w-full absolute bg-[#535353] top-[50%] -translate-y-[50%]"></div>
                    </div>
                    
                    
                </div>
            </div>
            <FooterComponent footerRef={footerRef} />
        </>
    );
}

export default App;
/*'#191f23', '#a27f74'*/
/*bg-[#E6E6FA] bg-[#7D666D]*/
/*timeline color pink: #a27f74
/*
example TimelineBtnComponent usage... possibly good for repurposing, has a good arrow svg:
<TimelineBtnComponent timeline_step={-timeline_step} timeline_max_offset={timeline_max_offset} position="right" setOffset={setOffset} />
<TimelineBtnComponent timeline_step={timeline_step} timeline_max_offset={timeline_min_offset} position="left" setOffset={setOffset} />

change:
1. scrollbar-color
rgb(20, 20, 22) rgb(6, 6, 6)

2. change fonts to local versions (not imported from google api)

3. load in animations for everything, special reset animations for timeline

4. another pass at mobile version, implement scroll snapping for touch devices, check media query for touch devices

5. Track down why tailwindcss custom font aliases don't work (tailwind.config.css)

6. Check ssl configuration in dev environment, ensure no overwriting for production

7. add parallax background somewhere (maybe to timeline too)

8. change landing page to something befitting a programmer, get inspiration from video game trailer opening sequence or something
- fibonacci sequence character animation
- character has gravity to end position, starting position and initial velocity are randomized, calculate position every frame using acceleration to end position

9. timeline component mobile version (sticky top position match navbar dynamic)

10. fix navbar animation delay to be attached to landing page animation using animation event, such that do not have to add artificial 1.5s delay that reoccurs on resizing window

11. Touch up projects page, hover animation shoul dbe better, center and resize programming icon probably, maybe just add a special styling for one or two of them to help 
information processing...

12. add action to projects page, click on project does soemthing, hover does something better (play gif/video), triple dot on right side like youtube  

13. (anim idea) svg connecting lines with javascript updaing positions of elements for dynamic positioning 

14. blog section: use https://magill.dev/post/lets-breakdown-my-website as inspiration
post abt tech stack
possibly about keyboards
other development
key breakthroughs ??? maybe not

priority (only 2 issues allowed):
home page revamp (just need image and finalize links left)
load in animations

on deck (1 issue allowed):
navbar location highlight
*/
                 