import { useState } from "react";
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
function App() {
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(false);   

    return (
        <>
            <TitleComponent />
            <LandingPageComponent />
            <NavBarComponent />
            <HomeViewComponent />
            <div id="projectsview" className="bg-[#0f0f0f] shadow-[0_2px_18px_rgba(0,0,0,.3)] relative z-10">
                <div id="projectsview_container" className="py-[80px]">
                <ConsoleComponent />
                <div
                    id="ProjectsComponent_container"
                        className="grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-x-[32px] gap-y-24 pt-32 pb-42 mx-auto w-full 
                                    max-w-[500px] [@media(min-width:1049px)]:max-w-[1032px] [@media(min-width:1581px)]:max-w-[1564px] place-items-center">
                    {ProjectData.projects.map((project, index) => (
                        <ProjectComponent key={index} {...project} />
                    ))}
                    </div>
                </div>
            </div>
            <div id="timelineview relative z-5">
                <TimelineComponent />
            </div>
            <div id="footer" className="bg-[#c1c1c1] w-full h-[320px] shadow-[0_-2px_18px_rgba(0,0,0,.3)] relative z-10"></div>
        </>
    );
}

export default App;
