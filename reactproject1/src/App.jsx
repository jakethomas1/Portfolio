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
            <div id="projectsview" className="bg-[#0f0f0f]">
                <div id="projectsview_container" className="mt-[80px]">
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
            <TimelineComponent />
            <h1 className="text-4xl text-blue-600 font-bold"> Hello World!</h1>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={check}
                            onChange={() => setCheck((prevcheck) => !prevcheck)}
                        />
                        Checkbox!
                    </label>
                    <h4> Checkbox says: {check ? "True" : "False"} </h4>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </div>
            </div>
            
        </>
    );
}

export default App;
