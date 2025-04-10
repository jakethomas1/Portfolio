import React, { useEffect } from 'react';
import { consoleText } from '../utils/ConsoleTextAnimation'; // Adjust the path as necessary

const ConsoleComponent = () => {
    useEffect(() => {
        // Note: This animation was adapted from Tobias: https://codepen.io/Tbgse/pen/dYaJyJ Thanks <3 (could be horribly inefficent, not sure, check here if performance problems)
        consoleText(['Hello World!', 'Projects', 'Projects.'], 'console_text', ['tomato', 'rebeccapurple', 'lightblue']);
    }, []);

    return (
        <div className='console-container 
                        font-[Khula] font-bold text-[3em] md:text-[6em] text-center h-auto whitespace-nowrap
                        pt-[12vh] block relative text-white top-0
                        bottom-0 left-0 right-0 z-[1]'>
            <div id="console_underline" className="absolute bottom-0 w-[320px] md:w-[640px] h-[3px] bg-[rgb(200,200,200)] left-1/2 -translate-x-1/2 z-10"></div>
            <span id='console_text'></span>
            <div className='console-underscore' id='console'>&#95;</div> 
        </div>
    ); //Note console-underscore styling is set in ConsoleTextAnimation.js
};

export default ConsoleComponent;
 