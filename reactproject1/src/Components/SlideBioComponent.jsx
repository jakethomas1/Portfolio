import { useEffect } from 'react';
import BtnComponentColor from './BtnComponentColor';
import BtnComponentWhite from './BtnComponentWhite';
import { useIntObs } from '../utils/useIntObs'

const SlideBioComponent = ({ homeRef, homeInView }) => { // inView is passed from app.jsx it is state variable passed from my useIntObs hook which is an intersection observer template
    const title_text_1 = `Software Engineer`
    const spaceship_quote1 = `Jacob Thomas`
    const spaceship_quote2 = `Software Engineer`
    const bio1 = `What started off as competitive interest in Math, led to a fire for Math, Physics, and Computers.`;
    const bio2 = ` Now, I have just recently graduated from CSU San Marcos with a B.S. in Computer Science.`;
    const [videoRef, visState] = useIntObs(.5, false);

    useEffect(() => {
        if (videoRef.current) {
            if (visState) {
                videoRef.current.play().catch(() => { });
            } else {
                videoRef.current.pause();
            }
        }
    }, [visState, videoRef]);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75;
        }
    }, [videoRef]);
    return (
        <>
            <div
                ref={homeRef}
                id="slideBioComp"
                className={`
                    relative top-0 left-0 min-h-[100vh] h-auto overflow-hidden
                    flex 
                    flex-col mt-[max(70px,10%)] gap-12 lg:gap-0 lg:mt-0 lg:flex-row 
                    items-center justify-center z-10
                    bg-[#040203] bg-no-repeat bg-top bg-cover w-full
                    shadow-[inset_0_0px_6px_rgba(0,0,0,0.1)]`}
            >
                <div
                    id="accompaniment_container"
                    className="w-full lg:w-6/11 h-full flex items-center justify-center text-left px-[40px]">
                    <div className="w-auto lg:w-[500px] mt-[24px]">
                        <div id="title_text"
                            className="text-[rgb(244,246,252)] text-[49px] font-['Inter'] mb-[20px]">
                            {title_text_1}
                        </div>
                        <div
                            id="body_text"
                            className="text-[21px] text-[rgb(111,121,135)]">
                            {bio1}
                            <br></br><br></br>
                            {bio2}
                        </div>
                        <div
                            id="links_container"
                            className="mt-[40px] w-fit flex sm:flex-row flex-col md:whitespace-nowrap sm:ml-0 ml-auto">
                            <div className="flex flex-col justify-end gap-y-[1em] 
                                            [@media(min-width:382px)]:flex-row [@media(min-width:382px)]:justify-start [@media(min-width:382px)]:gap-y-[0]">
                                <BtnComponentWhite btn_text="Resume" icon_file="resume-icon.svg" dest="/assets/JacobThomas_Resume.pdf" />
                                <BtnComponentWhite btn_text="Diploma" icon_file="diploma-scroll.svg" dest="https://www.parchment.com/u/award/95d7dc7f49b6813fab2a29af0ad7adc4" />
                            </div>
                            <div className="flex justify-end mt-[1em] sm:mt-0 sm:block sm:justify-normal">
                                <BtnComponentColor btn_text="Projects" icon_file="projects-icon.svg" dest="projectsview" />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="picture_frame_container"
                    className="relative lg:w-5/11 h-full justify-center items-center content-center mt-[10px]">
                    <div
                        id="picture_frame"
                        className={`relative w-[275px] h-[253px] sm:w-[500px] sm:h-[460px]`}>

                        <video
                            ref={videoRef}
                            className="absolute top-0 left-0 w-full h-full object-cover opacity-100 rounded-[8px]"
                            loop
                            muted
                            playsInline
                            autoPlay
                            preload="metadata"
                        >
                            <source src={"/assets/spaceship.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div id="offset_border"
                            className="absolute inset-0 border-2 border-gray-500 translate-x-[16px] -translate-y-[16px] z-[-1]
                                    rounded-[8px]"></div>
                    </div>
                </div>
                
            </div>

        </>
    );
};
//Note: 90/100 shall be 100% mark
export default SlideBioComponent;