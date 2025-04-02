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

function App() {
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(false);

    

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const tilesData = Array.from({ length: 5 }, (_, index) => ({
        number: index + 1,
        text: `This is tile number ${index + 1}. Random number: ${getRandomInt(1, 100)}`,
    }));

    return (
        <>
            <TitleComponent />
            <LandingPageComponent />
            <NavBarComponent />
            <HomeViewComponent />
            <div id="projectsview" className="bg-[#0f0f0f]">
                <ConsoleComponent />
                <div
                    id="ProjectsComponent_container"
                    className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 u-3:grid-cols-3 gap-y-36 pt-32 pb-42 mx-auto place-items-center">
                    {tilesData.map((ProjectData) => (
                        <ProjectComponent key={ProjectData.number} number={ProjectData.number} text={ProjectData.text} />
                    ))}
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
