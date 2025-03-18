import React, { useEffect } from 'react';
import App from "../App";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import ProjectsComponent from "./ProjectsComponent";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

const NavBarComponent = () => {
    return (
        <>
            <div id="navbar" className="bg-[#164738] w-70/100 h-8/100 left-15/100 top-1/100 fixed rounded-[8px]" >
                <Router>
                    <nav className="w-full h-full">
                        <div className="flex flex-row h-full w-full justify-center items-center">
                            <span className="m-0"><Link to="/home" className="nav_link">Home</Link></span>
                            <span className="m-0"><Link to="/projects" className="nav_link">Projects</Link></span>
                            <span className="m-0"><Link to="/about" className="nav_link">About</Link></span>
                            <span className="m-0"><Link to="/contact" className="nav_link">Contact</Link></span>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/home" component={App} />
                        <Route path="/about" component={AboutComponent} />
                        <Route path="/contact" component={ContactComponent} />
                        <Route path="/contact" component={ProjectsComponent} />
                    </Routes>
                </Router>
            </div>
        </>
    );
};

export default NavBarComponent;