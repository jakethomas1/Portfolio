import React from 'react';

const getBackgroundColor = (width) => {
    const red = 255;
    const green = Math.max(0, Math.floor(255 - (width / 100) * 255 + (width <= 20 ? (width / 20) * 255 : 0)));
    const blue = 0; 
    return `rgb(${red}, ${green}, ${blue})`;
};

const SkillDisplay = ({ imgSrc, imgAlt, width }) => {
    const backgroundColor = getBackgroundColor(width);

    return (
        <div className="skill_display w-full flex relative">
            <img className="w-[64px] h-[64px]" src={imgSrc} alt={imgAlt} />
            <div
                className="absolute inset-x-0 translate-y-[28px] translate-x-[68px] z-30 h-[8px] border-[1px] rounded-l-[4px]"
                style={{ backgroundColor: backgroundColor, width: `${width}%` }}
            ></div>
            <div
                className="absolute inset-x-0 translate-y-[28px] translate-x-[68px] h-[8px] border-[1px] rounded-[4px]"
                style={{ backgroundColor: 'rgba(140,140,140,.5)', width: `90%` }}
            ></div>
        </div>
    );
};

export default SkillDisplay;
