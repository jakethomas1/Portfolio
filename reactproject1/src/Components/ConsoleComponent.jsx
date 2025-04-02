import React, { useEffect } from 'react';
import { consoleText } from '../utils/ConsoleTextAnimation'; // Adjust the path as necessary

const ConsoleComponent = () => {
    useEffect(() => {
        // Note: This animation was adapted from Tobias: https://codepen.io/Tbgse/pen/dYaJyJ Thanks <3 (could be horribly inefficent, not sure, check here if performance problems)
        consoleText(['Hello World!', 'Projects', 'Projects.'], 'console_text', ['tomato', 'rebeccapurple', 'lightblue']);
    }, []);

    return (
        <div className='console-container 
                        font-[Khula] font-bold text-[6em] text-center h-auto whitespace-nowrap
                        border-t border-black pt-[12vh] block relative text-white top-0
                        bottom-0 left-0 right-0 z-[1]'>
            <span id='console_text'></span>
            <div className='console-underscore' id='console'>&#95;</div> 
        </div>
    ); //Note console-underscore styling is set in ConsoleTextAnimation.js
};

export default ConsoleComponent;
