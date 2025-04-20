import App from "../App";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import ProjectComponent from './ProjectComponent';
import { useState } from "react";

const NavBarComponent = () => {
    const [vis, setVis] = useState(false);
    
    const jumpTo = (element_id) => {
        const projectsview = document.getElementById(element_id);
        projectsview.scrollIntoView({ behavior: 'auto', block: 'start' });
    };

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
            <div id="navbar" className={`md:border-[rgba(0,0,0,.25)] md:border-solid md:border-[1px] md:bg-[#fcfae6] md:min-w-[480px] 
                                        md:w-40/100 md:h-6/100 md:top-1/100 md:fixed md:rounded-[6px] md:z-20 md:left-1/2 md:-translate-x-1/2
                                        fixed w-auto max-w-7/10 h-full bg-[rgba(200,200,200,1)] z-20 left-0 md:block ${vis ? 'block' : 'hidden'}`} >
                <Router>
                    <nav className="w-full h-full">
                        <div className="nav_link_container flex flex-col md:flex-row h-full w-full md:justify-center md:items-center text-left md:text-middle">
                            <Link to="/home" onClick={() => jumpTo('homeview')} className={`nav_link`}>Home</Link>
                            <Link to="/projects" onClick={() => jumpTo('projectsview')} className="nav_link">Projects</Link>
                            <Link to="/about" onClick={() => jumpTo('timelineview_container')} className="nav_link">About</Link>
                            <Link to="/contact" onClick={() => jumpTo('footer')} className="nav_link">Contact</Link>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/home" component={App} />
                        <Route path="/about" component={ProjectComponent} />
                        <Route path="/about" component={AboutComponent} />
                        <Route path="/contact" component={ContactComponent} />
                        <Route path="/contact"  />
                    </Routes>
                </Router>
            </div>
        </>
    );
};

export default NavBarComponent;