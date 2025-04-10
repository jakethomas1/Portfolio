import React, { useEffect, useRef, useState } from 'react';
import App from "../App";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import ProjectComponent from './ProjectComponent';

const NavBarComponent = () => {
    
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);
    const jumpTo = (element_id) => {
        const projectsview = document.getElementById(element_id);
        projectsview.scrollIntoView({ behavior: 'auto', block: 'start' });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                threshold: 0.5, // Trigger animation when 50% of the element is in view
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup observer
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <>
            <div id="navbar" className="border-[rgba(0,0,0,.25)] border-solid border-[1px] bg-[#fcfae6] min-w-[480px] w-40/100 h-6/100 top-1/100 fixed rounded-[6px] z-20 left-1/2 -translate-x-1/2" >
                <Router>
                    <nav className="w-full h-full">
                        <div className="flex flex-row h-full w-full justify-center items-center">
                            <span className="m-0"><Link to="/home" onClick={() => jumpTo('homeview')} className={`nav_link ${isInView ? 'opacity-0 translate-y-100' : 'opacity-100 translate-y-0'}`}>Home</Link></span>
                            <span className="m-0"><Link to="/projects" onClick={() => jumpTo('projectsview')} className="nav_link">Projects</Link></span>
                            <span className="m-0"><Link to="/about" onClick={() => jumpTo('timelineview')} className="nav_link">About</Link></span>
                            <span className="m-0"><Link to="/contact" onClick={() => jumpTo('footer')} className="nav_link">Contact</Link></span>
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