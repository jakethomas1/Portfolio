import React from 'react';

const ProjectComponent = ({ number, text }) => {
    return (
            <div className="relative bg-gray-500 h-[42vh] flex items-center justify-center rounded-[4px] flex-col border-[2px] border-[rgba(200,200,200,.5)]">
                <h3>Tile {number}</h3>
                <div className="absolute w-100/100 h-2/7 bottom-0 bg-[rgba(255,255,255,.2)] border-t-[1px] border-[rgba(90,90,90,1)]">{text}</div>
            </div>
    )
}

export default ProjectComponent;