import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import ProjectComponent from './ProjectComponent';
import HomeViewComponent from './HomeViewComponent';
import { useState } from "react";
import { useClickAway } from '../utils/useClickAway';
import { useIntObs } from '../utils/useIntObs'
import { Link } from 'react-router-dom';

const NavBarComponent = ({ activeBtn }) => {
    const [vis, setVis] = useState(false);
    const [scollSentinel, endVis] = useIntObs(1, false);
    
    const navLinks = [
        { to: "/home", id: "slideBioComp", name: "Home" },
        { to: "/projects", id: "projectsview", name: "Projects" },
        { to: "/about", id: "timelineview_container_scroller", name: "About" },
        { to: "/contact", id: "footer_container", name: "Contact" },
    ];

    const jumpTo = (element_id) => {
        const projectsview = document.getElementById(element_id);
        projectsview.scrollIntoView({ behavior: 'auto', block: 'start' });
    };

    const navref = useClickAway(() => {
        setVis(false)
    });

    return (
        <>
            <div className={`md:hidden block h-[60px] w-full fixed top-0 z-20 transition-[background] duration-200 ease-in-out flex flex-row
                            ${endVis ? 'bg-[#dbd9c1] text-black' : 'text-white backdrop-blur-md bg-[rgba(0,0,0,.65)]'}

            `}>
                <img
                    onClick={() => {
                        jumpTo("base_html");
                    }}
                    src={`/assets/icons/jt-icon-512x512.png`}
                    alt="icon"
                    className="absolute flex-none inline w-[22px] h-[22px] m-[19px] justify-start z-21"
                />
                <div id="mobile_navbar_text"
                    className="w-[calc(100%)] relative text-middle flex flex-row items-center
                                font-bask justify-center text-inherit font-bold animate-slide-down
                                uppercase text-[14px] h-full content-center whitespace-nowrap">
                    
                    <div className="">Jacob Thomas</div>
                </div>
                <div
                    id="navbar_hamburger"
                    className={`flex flex-col justify-between border-[0px] bg-transparent rounded-[3px] z-21 cursor-pointer
                    absolute top-0 right-0 p-[9px] m-[10px] w-[40px] h-[40px]  md:hidden ${vis ? 'hidden' : 'flex'}`}
                    onClick={() => setVis(!vis)}
                >
                    <div className={`${endVis ? 'bg-black' : 'bg-white'} w-full h-[4px] rounded-full`}></div>
                    <div className={`${endVis ? 'bg-black' : 'bg-white'} w-full h-[4px] rounded-full`}></div>
                    <div className={`${endVis ? 'bg-black' : 'bg-white'} w-full h-[4px] rounded-full`}></div>
                </div>
            </div>
            <div
                ref={navref}
                id="navbar"
                className={`md:grid md:grid-cols-[1fr_auto_1fr] md:fixed flex-col 
                            md:items-center top-0 md:border-[rgba(0,0,0,.25)] md:border-solid md:border-[1px]  md:min-w-[480px] 
                            md:w-[100%] z-21 md:z-20 w-11/20
                            fixed h-full bg-[rgba(200,200,200,1)] z-20 right-0 transition-[height,background] 
                            duration-200 ease-in-out min-h-[70px]
                            ${vis ? 'flex animate-navbar-mobile-expand' : 'hidden'} ${endVis ? 'md:h-10/100 md:bg-[#fcfae6] text-black' : 'text-white md:backdrop-blur-md md:bg-[rgba(0,0,0,.65)] md:h-8/100'}`} >

                <div
                    id="name1"
                    className="font-bask justify-center z-21 text-inherit font-bold animate-slide-down
                                uppercase text-[20px] h-full content-center pl-[0] whitespace-nowrap hidden md:block">
                    Jacob Thomas</div>

                
                <div className="justify-center w-full h-full hidden md:block">
                    
                </div> 
                

                <div className="w-full h-full">
                    <div className="nav_link_container flex flex-col md:flex-row h-full w-full justify-end items-center text-left text-middle pr-6">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => {
                                    jumpTo(link.id);
                                    setVis(false);
                                }}
                                style={{ animationDelay: `${index * 0.2}s` }}
                                className={`nav_link ${activeBtn === link.name.toLowerCase() ? 'text-[#F15030]' : 'text-black md:text-inherit'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div ref={scollSentinel} id="scroll-position-sent" className="absolute top-[150px]"></div>
            <div
                id="mobile-clickout-overlay"
                className={`${vis ? 'fixed' : 'hidden'} w-full h-full bg-black opacity-50 z-20`}
            ></div>
        </>
    );
};

export default NavBarComponent;

/*Dont actually need react router here, most use comes out of switching off single page application - SPA, but I will keep for future use*/