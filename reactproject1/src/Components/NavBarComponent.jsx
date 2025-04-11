import App from "../App";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import ProjectComponent from './ProjectComponent';

const NavBarComponent = () => {
    
    
    const jumpTo = (element_id) => {
        const projectsview = document.getElementById(element_id);
        projectsview.scrollIntoView({ behavior: 'auto', block: 'start' });
    };

    

    return (
        <>
            <div id="navbar" className="md:border-[rgba(0,0,0,.25)] md:border-solid md:border-[1px] md:bg-[#fcfae6] md:min-w-[480px] 
                                        md:w-40/100 md:h-6/100 md:top-1/100 md:fixed md:rounded-[6px] md:z-20 md:left-1/2 md:-translate-x-1/2
                                        fixed w-auto max-w-7/10 h-full bg-[rgba(200,200,200,1)] z-20 right-0
" >
                <Router>
                    <nav className="w-full h-full">
                        <div className="flex flex-col md:flex-row h-full w-full md:justify-center md:items-center text-left md:text-middle">
                            <Link to="/home" onClick={() => jumpTo('homeview')} className={`nav_link`}>Home</Link>
                            <Link to="/projects" onClick={() => jumpTo('projectsview')} className="nav_link">Projects</Link>
                            <Link to="/about" onClick={() => jumpTo('timelineview')} className="nav_link">About</Link>
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