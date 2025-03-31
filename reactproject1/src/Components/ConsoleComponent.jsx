import React, { useEffect } from 'react';
import { consoleText } from '../utils/ConsoleTextAnimation'; // Adjust the path as necessary

const ConsoleComponent = () => {
    useEffect(() => {
        // Note: This animation was adapted from Tobias: https://codepen.io/Tbgse/pen/dYaJyJ Thanks <3
        consoleText(['Hello World!', 'Projects', 'Projects.'], 'console_text', ['tomato', 'rebeccapurple', 'lightblue']);
    }, []);

    return (
        <div className='console-container'>
            <span id='console_text'></span>
            <div className='console-underscore' id='console'>&#95;</div>
        </div>
    );
};

export default ConsoleComponent;
