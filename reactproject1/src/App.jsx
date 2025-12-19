import "./App.css";
import "./config.css";
import TitleComponent from "./Components/TitleComponent";
import NavBarComponent from "./Components/NavBarComponent";


import TimelineComponent from './Components/TimelineComponent';
import TimelineScroller from './Components/TimelineScroller';
import ProjectsViewComponent from './Components/ProjectsViewComponent';
import ProjectData from './data/project_data.json'
import TimelineData from './data/timeline_data.json'
import { useIntObs } from './utils/useIntObs';
import { useRef, useState } from "react";
import { useSectionInView } from './utils/useSectionInView';
import { TextScrambleComponent } from './Components/TextScrambleComponent';
import { interpolate, interpolateColors } from './utils/interpolate'
import SlideBioComponent from "./Components/SlideBioComponent"
import useActiveSectionTracker from "./utils/useActiveSectionTracker";
import FooterComponent from "./Components/FooterComponent";
import ProgressTrackerComponent from "./Components/ProgressTrackerComponent";


function App() {
   
    //Note: threshold is calculated as follows:
    //  (desired % in view) / (section height in vh / 100vh)
    //  e.g. (.5) / (300vh / 100) = .1667 ... only applicable in sections larger than 100vh
    // note: projectsview has dynamic height, must get clever using absolute ele with height:calc(100%-100vh) basically the middlepoint marker
    const [homeRef, homeInView] = useIntObs(0.4, false); 
    const [projectsRef, projectsInView] = useIntObs(.1, false);
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
    
    
    /*const [tlRef, tlProgress] = useSectionInView();*/
    const [tlRef, tlInView] = useIntObs(.4, false);
    /*const translateX = useTransform(tlProgress, [0, 1], [650, -2200]);*/
    

    return (
        <>
            <TitleComponent />
            {/* Add renewed landing page component if desired*/ }
            <NavBarComponent activeBtn={activeSection} />
            <SlideBioComponent homeRef={homeRef} homeInView={homeInView} />
            <ProgressTrackerComponent />
            <ProjectsViewComponent projectsRef={projectsRef} />
            
            <TimelineScroller tlRef={tlRef} aboutRef={aboutRef} />
            <FooterComponent footerRef={footerRef} />
        </>
    );
}

export default App;
/*
style={{
    transform: `translateX(${interpolate(650, -2200, tlProgress)}px)`,
}}
*/
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
                 