import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import ProjectComponent from './ProjectComponent';
import HomeViewComponent from './HomeViewComponent';
import { useState } from "react";
import { useClickAway } from '../utils/useClickAway';
import { useIntObs } from '../utils/useIntObs'

const NavBarComponent = () => {
    const [vis, setVis] = useState(false);
    
    const [scollSentinel, endVis] = useIntObs(1, false);

    const jumpTo = (element_id) => {
        const projectsview = document.getElementById(element_id);
        projectsview.scrollIntoView({ behavior: 'auto', block: 'start' });
    };

    const navref = useClickAway(() => {
        setVis(false)
    });

    return (
        <>
            <div
                id="navbar_hamburger"
                className={`flex flex-col justify-between border-[1px] border-white bg-[#333] rounded-[3px] 
                fixed top-0 left-0 p-[8px] m-[10px] w-[40px] h-[40px] z-20 md:hidden ${vis ? 'hidden' : 'flex'}`}
                onClick={() => setVis(!vis)}
            >
                <div className="w-full h-[4px] bg-white rounded-full"></div>
                <div className="w-full h-[4px] bg-white rounded-full"></div>
                <div className="w-full h-[4px] bg-white rounded-full"></div>
            </div>
            <div
                ref={navref}
                id="navbar"
                className={`md:grid md:grid-cols-[1fr_auto_1fr] md:items-center top-0 md:border-[rgba(0,0,0,.25)] md:border-solid md:border-[1px] md:bg-[#fcfae6] md:min-w-[480px] 
                            md:w-full  md:fixed md:z-20 md:left-1/2 md:-translate-x-1/2
                            fixed h-full bg-[rgba(200,200,200,1)] z-20 left-0 transition-[height] duration-200 ease-in-out
                            ${vis ? 'grid' : 'hidden'} ${endVis ? 'md:h-10/100' : 'md:h-8/100'}`} >

                <div id="name1" className="font-bask justify-center z-21 text-black text-[24px] h-full content-center pl-[12vw] whitespace-nowrap">Jacob Thomas</div>

                <Router>
                    <nav className="justify-center w-full h-full">
                        <div className="nav_link_container flex flex-col md:flex-row h-full w-full md:justify-center md:items-center text-left md:text-middle">
                            <Link to="/home" onClick={() => { jumpTo('homeview'); setVis(false); }} className={`nav_link`}>Home</Link>
                            <Link to="/projects" onClick={() => { jumpTo('projectsview'); setVis(false); }} className="nav_link">Projects</Link>
                            <Link to="/about" 
                                onClick={() => { jumpTo('timelineview_container'); setVis(false); }}
                                className="nav_link">About</Link>
                            <Link
                                to="/contact"
                                onClick={() => {
                                jumpTo('footer')
                                setVis(false)
                            }}
                                className="nav_link">Contact</Link>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/home" element={<HomeViewComponent />} />
                        <Route path="/about" element={<ProjectComponent />} />
                        <Route path="/about" element={<AboutComponent />} />
                        <Route path="/contact" element={<ContactComponent />} />
                    </Routes>
                </Router>

                <div className="justify-self-end w-0"></div>
            </div>
            <div ref={scollSentinel} id="scroll-position-sent" className="absolute top-[150px]"></div>
        </>
    );
};

export default NavBarComponent;

/*Dont actually need react router here, most use comes out of switching off single page application - SPA, but I will keep for future use*/