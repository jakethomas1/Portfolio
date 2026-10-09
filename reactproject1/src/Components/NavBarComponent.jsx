import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import ProjectComponent from './ProjectComponent';
import HomeViewComponent from './HomeViewComponent';
import { useState } from "react";
import { useClickAway } from '../utils/useClickAway';
import { Link } from 'react-router-dom';

const NavBarComponent = ({ activeBtn, endVis }) => {
    const [vis, setVis] = useState(false);

    const navLinks = [
        { to: "/home", id: "slideBioComp", name: "Home" },
        { to: "/projects", id: "projectsview", name: "Projects" },
        //{ to: "/about", id: "notable_quote", name: "About" },
        { to: "/contact", id: "footer_container", name: "Contact" },
    ];

    const jumpTo = (element_id) => {
        if (element_id === "base_html") {
            document.getElementById("scroll-area")?.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const element = document.getElementById(element_id);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const navref = useClickAway(() => {
        setVis(false)
    });
    //#dbd9c1
    return (
        <>
            <div className={`md:hidden block h-[60px] w-full flex-none relative z-20 transition-[background] duration-200 ease-in-out flex flex-row
                            ${endVis ? 'bg-[rgba(0,0,0,0] text-black' : 'text-white backdrop-blur-md bg-[rgba(0,0,0,.65)]'}

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
                                font-expletus justify-center text-inherit font-bold animate-slide-down
                                capitalize text-[18px] h-full content-center whitespace-nowrap">

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

            {/* Full-width bar: owns background, blur, border and height.
                md:overflow-hidden + scrollbar-gutter reserves the same width the
                scroll area's scrollbar takes, so the two stay horizontally aligned. */}
            <div
                ref={navref}
                id="navbar"
                className={`md:block md:relative flex-col md:rounded-none rounded-bl-[8px]
                            md:top-0 md:border-[rgba(0,0,0,.25)] md:border-solid md:border-[1px] md:min-w-[480px] 
                            md:w-[100%] md:z-20 w-11/20
                            md:overflow-hidden md:[scrollbar-gutter:stable]
                            fixed h-auto bg-[rgba(200,200,200,1)] z-22 right-0 transition-[height,background] 
                            duration-200 ease-in-out min-h-[70px] flex-none
                            ${vis ? 'flex animate-navbar-mobile-expand' : 'hidden'} ${endVis ? 'md:h-[78px] md:bg-transparent text-white' : 'text-white md:backdrop-blur-md md:bg-[rgba(0,0,0,.65)] md:h-[70px]'}`} >

                {/* Content container: `contents` on mobile (no layout change),
                    centered max-width 3-column grid on desktop. Use the same
                    max-w-[1200px] mx-auto px-6 on every other section. */}
                <div className="contents md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:h-full md:max-w-[1280px] md:mx-auto md:px-[40px]">

                    <div
                        className={`font-expletus z-21 text-inherit font-bold animate-slide-down
                                    uppercase text-[26px] h-full content-center pl-[0] whitespace-nowrap hidden md:block md:text-left transition-colors duration-200 ease-in-out ${endVis ? 'text-transparent' : 'text-white'}`}>
                        Jacob Thomas</div>

                    <div className="justify-center w-full h-full hidden md:block">

                    </div>

                    <div className="w-full h-full rounded-[8px]">
                        <div className="nav_link_container flex flex-col md:flex-row h-full w-full justify-start md:justify-end items-center text-left text-middle 
                                        backdrop-sepia-30 md:backdrop-sepia-0">
                            {navLinks.map((link, index) => (
                                <div key={link.to} className="relative flex w-full md:w-auto rounded-bl-[8px] md:rounded-none">
                                    <Link
                                        to={link.to}
                                        onClick={() => {
                                            jumpTo(link.id);
                                            setVis(false);
                                        }}
                                        style={{ animationDelay: `${index * 0.2}s` }}
                                        className={`nav_link 
                                            ${activeBtn === link.name.toLowerCase() ? 'text-[#800080] md:text-[#F15030]' : 'text-black md:text-inherit'} 
                                            `}
                                    >
                                        {link.name}
                                    </Link>
                                    <div className={`absolute md:top-0 md:right-0 bottom-0 left-0 w-full h-full block md:hidden pointer-events-none 
                                                border-b-[2px] border-[rgb(90,90,90)] md:border-none z-[-1]
                                                ${index === navLinks.length - 1 ? 'md:rounded-none rounded-bl-[8px]' : ''}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div
                id="mobile-clickout-overlay"
                className={`${vis ? 'fixed' : 'hidden'} w-full h-full bg-black opacity-50 z-21 top-0`}
            ></div>
        </>
    );
};

export default NavBarComponent;

/*Dont actually need react router here, most use comes out of switching off single page application - SPA, but I will keep for future use*/
