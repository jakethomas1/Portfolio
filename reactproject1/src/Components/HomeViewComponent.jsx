import React, { useRef } from 'react';

const HomeViewComponent = () => {
    const homeview_div = useRef(null);

    return (
        <>
            <div
                ref={homeview_div}
                id="homeview"
                className={`
                    static top-0 left-0 h-[90vh] overflow-hidden text-gray-900
                    flex items-center justify-center z-10
                    bg-[url('./assets/pexels-pixabay-208745.jpg')] bg-no-repeat bg-top bg-cover w-full
                    shadow-[inset_0_0px_6px_rgba(0,0,0,0.1)]`}
                >
                <div className="titleBox flex flex-col items-middle">
                    <h1 id="nameplate" className="font-semibold"> Jacob Thomas </h1>
                    <h3 id="titleplate" className="font-semibold"> Software Developer </h3>
                </div>
            </div>
        </>
    );
};

export default HomeViewComponent;