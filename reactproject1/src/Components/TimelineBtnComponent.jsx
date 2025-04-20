const TimelineBtnComponent = ({ timeline_step, timeline_max_offset, position, setOffset }) => {
    const handleClick = () => {
        if (position === 'right') { setOffset(prev => Math.max(prev + timeline_step, timeline_max_offset)); }
        else { setOffset(prev => Math.min(prev + timeline_step, timeline_max_offset)); }
    };

    return (
        <div
            className={`flex justify-end items-center absolute min-w-[200px] max-w-[200px] h-full duration-200 ease-in-out transition-all bg-[rgba(88,101,242,.1)] hover:bg-[rgba(88,101,242,.5)] group ${position === 'right' ? 'right-0' : 'left-0 scale-x-[-1]'
                }`}
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-chevron-right w-14 h-18 text-black group-hover:text-[#5865F2] mr-[16px] duration-200 ease-in-out transition-all"
                viewBox="0 0 16 16"
                preserveAspectRatio="none"
            >
                <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
            </svg>
        </div>
    );
};

export default TimelineBtnComponent;
