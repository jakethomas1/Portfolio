import React, { useRef } from 'react';
import SkillDisplay from './SkillDisplayComponent.jsx';

const ProfileComponent = () => {
    const homeview_div = useRef(null);
    const bio = `What started off as competitive interest in Math, led to a fire for Math, 
        Physics, and Computers. In my free time I like to play basketball or read 
        a good book. I love to learn new things and facilitate that for others as 
        well, tutoring throughout high school and university. I worked hard as 
        Software QA to learn a great deal and gained confidence as my performance increased. 
        Now, I have just recently graduated from CSU San Marcos with a B.S Computer 
        Science and I am eager to get to work with further improved skills. `;

    return (
        <>
            <div
                ref={homeview_div}
                id="homeview"
                className={`
                    relative top-0 left-0 h-[95vh] overflow-hidden text-gray-900
                    flex items-center justify-center z-10
                    bg-[lightblue] bg-no-repeat bg-top bg-cover w-full
                    shadow-[inset_0_0px_6px_rgba(0,0,0,0.1)]`}
            >
                
                <div
                    id="home_content_container"
                    className="flex flex-row items-middle w-95/100 h-[75vh] mt-[15vh] mb-[5vh] border-[1px] border-[rgba(255,255,255,.4)] rounded-[4px]">
                    <div
                        id="profile_pic_column"
                        className="flexz flex-col h-100/100 w-30/100">
                        <div 
                            id="profile_pic_container"
                            className="flex justify-center items-center w-[128px] h-[128px] rounded-[5px] bg-[#bbb] mt-[7vh]  border-[rgba(0,0,0,0.3)] border-[1px]">
                            <div
                                id="profilepic"
                                className="w-[100px] h-[100px] z-50 rounded-[50%] bg-[url('./assets/greypersonicon.jpg')] bg-cover"></div>
                        </div>
                        <div
                            id="profile_blurb_container"
                            className="flex flex-col flex-grow w-100/100 justify-start">

                            <div className="profile_blurb">Jacob Thomas</div>
                            <div className="profile_blurb">Level 25</div>
                            <div className="profile_blurb">Programmer</div>
                        </div>
                    </div>
                    <div className="flex flex-col w-100/100 ml-[3vw]">
                        <div id="skills_container"
                            className="relative flex flex-col w-90/100 h-70/100">

                            <SkillDisplay
                                key={1}
                                imgSrc={'/src/assets/icons/c-.png'}
                                imgAlt={'C++'}
                                width={'60'}
                            />
                            <div className="skill_display"></div>
                            <div className="skill_display"></div>
                            <div className="skill_display"></div>
                        </div>
                        <div id="profile_bio"
                            className="flex relative h-30/100 w-100/100 mt-[2vh] items-center text-left">
                            &emsp;&emsp;{bio}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
//Note: 90/100 shall be 100% mark
export default ProfileComponent;