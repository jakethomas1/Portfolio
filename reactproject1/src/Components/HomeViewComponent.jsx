import React, { useRef } from 'react';

const HomeViewComponent = () => {
    const homeview_div = useRef(null);

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
                        className="flex flex-col h-100/100 w-30/100">
                        <div 
                            id="profile_pic_container"
                            className="flex justify-center items-center w-[128px] h-[128px] rounded-[5px] bg-[#bbb] mt-[7vh] ml-[5vw]">
                            <div
                                id="profilepic"
                                className="w-[100px] h-[100px] rounded-[50%] bg-[green]"></div>
                        </div>
                        <div
                            id="profile_blurb_container"
                            className="flex flex-col flex-grow w-100/100 justify-start pl-[4vw] pt-[2vh]">

                            <div className="profile_blurb">Jacob Thomas</div>
                            <div className="profile_blurb">Level 25</div>
                            <div className="profile_blurb">Programmer</div>
                        </div>
                    </div>
                    <div id="skills_container"
                        className="relative flex flex-col w-70/100 h-100/100 ml-[3vw]" >

                        <div className="skill_display w-fit flex">
                            <img className="w-[64px] h-[64px]" src="/src/assets/icons/c-.png"></img>
                            <div class="absolute inset-x-0 translate-y-[32px] translate-x-[64px] border-t-[2px] border-[#000]"></div>
                        </div>
                        <div className="skill_display"></div>
                        <div className="skill_display"></div>
                        <div className="skill_display"></div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default HomeViewComponent;