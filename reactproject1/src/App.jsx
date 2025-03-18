import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./config.css";
import LandingPageComponent from "./Components/LandingPageComponent";
import TitleComponent from "./Components/TitleComponent";
import NavBarComponent from "./Components/NavBarComponent";
import HomeViewComponent from "./Components/HomeViewComponent";

function App() {
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(false);

    return (
        <>
            <TitleComponent />
            <LandingPageComponent />
            <NavBarComponent />
            <HomeViewComponent />
            <h1 className="text-4xl text-blue-600 font-bold"> Hello World!</h1>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img
                        src={viteLogo}
                        className="logo inline"
                        style={{ width: "200px", height: "200px" }}
                        alt="Vite logo"
                    />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo reactinline inline"
                        style={{ width: "200px", height: "200px" }}
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
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
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
