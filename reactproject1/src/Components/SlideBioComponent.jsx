import { useRef } from 'react';
import BtnComponentColor from './BtnComponentColor';
import BtnComponentWhite from './BtnComponentWhite';
const SlideBioComponent = ({ homeRef }) => {
    const title_text_1 = `Try my projects`
    const spaceship_quote1 = `Jacob Thomas`
    const spaceship_quote2 = `Software Engineer`
    const bio1 = `What started off as competitive interest in Math, led to a fire for Math, Physics, and Computers.`;
    const bio2 = ` Now, I have just recently graduated from CSU San Marcos with a B.S. in Computer Science.`;

    return (
        <>
            <div
                ref={homeRef}
                id="slideBioComp"
                className={`
                    relative top-0 left-0 h-[100vh] overflow-hidden
                    flex flex-row items-center justify-center z-10
                    bg-[#040203] bg-no-repeat bg-top bg-cover w-full
                    shadow-[inset_0_0px_6px_rgba(0,0,0,0.1)]`}
            >
                <div
                    id="accompaniment_container"
                    className="w-6/11 h-full flex items-center justify-center text-left">
                    <div className="w-[500px] mt-[24px]">
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
                            className="w-full mt-[40px] w-fit whitespace-nowrap">
                            <BtnComponentWhite btn_text="Resume" icon_file="resume-icon.svg" dest="/assets/JacobThomas_Resume.pdf" />
                            <BtnComponentWhite btn_text="Diploma" icon_file="diploma-scroll.svg" dest="https://www.parchment.com/u/award/95d7dc7f49b6813fab2a29af0ad7adc4" />
                            <BtnComponentColor btn_text="Projects" icon_file="projects-icon.svg" dest="projectsview" />
                        </div>
                    </div>
                </div>
                <div
                    id="picture_frame_container"
                    className="relative w-5/11 h-full justify-center items-center content-center">
                    <div
                        id="picture_frame"
                        className={`relative w-[500px] h-[460px] bg-blue-200 rounded-[8px]`}>
                        <video
                            className={`absolute top-0 left-0 w-full h-full object-cover opacity-100`}
                            loop muted playsInline
                            onLoadedMetadata={(e) => {
                                e.target.playbackRate = .5;
                            }}
                        >
                            <source src="/assets/spaceship.mp4" type="video/mp4" />
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