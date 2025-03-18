import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./config.css";
import LandingPageComponent from "./Components/LandingPageComponent";
import TitleComponent from "./Components/TitleComponent";
import NavBarComponent from "./Components/NavBarComponent";
import HomeViewComponent from "./Components/HomeViewComponent";
import DotGridComponent from './Components/DotGridComponent';

function App() {
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(false);

    //DotGrid stuff
    const [dots, setDots] = useState([]);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null); // Reference to the container

    // Generate dots in a grid layout within the central 80% of the container
    const generateDots = () => {
        if (!containerRef.current) return; // Ensure the container is available
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;

        const marginX = containerWidth * 0.1;  // 10% margin on the left and right
        const marginY = containerHeight * 0.1;  // 10% margin on the top and bottom

        const width = containerWidth * 0.8;  // 80% of container width
        const height = containerHeight * 0.8; // 80% of container height

        const cols = 12;  // Number of columns (adjust based on how many dots you want)
        const rows = 10;  // Number of rows (adjust based on how many dots you want)

        // Calculate the step size for placing dots in the grid
        const stepX = width / (cols - 1);
        const stepY = height / (rows - 1);

        // Generate dots in a grid layout
        const newDots = [];
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = marginX + col * stepX;  // Calculate x position based on column index
                const y = marginY + row * stepY;  // Calculate y position based on row index
                newDots.push({ x, y });
            }
        }
        setDots(newDots);
    };

    // Handle mouse move event to track cursor position
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.pageX, y: e.pageY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Regenerate dots when container size is resized
    useEffect(() => {
        const handleResize = () => {
            generateDots();
        };

        // Listen for resize events on the container
        const resizeObserver = new ResizeObserver(handleResize);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        // Generate dots on initial load
        generateDots();

        return () => {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, []);
    //DotGrid ^

    return (
        <>
            <TitleComponent />
            <LandingPageComponent />
            <HomeViewComponent />
            <NavBarComponent />
            <div><DotGridComponent
                dots={dots}              
                cursorPosition={cursorPosition} 
                dotSize={10}
                containerRef={containerRef}
            /></div>
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
