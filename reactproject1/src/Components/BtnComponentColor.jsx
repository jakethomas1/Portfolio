
const IconDisplayComponent = ({ btn_text, icon_file, dest }) => {
    const jumpTo = (element_id) => {
        const elem = document.getElementById(element_id);
        elem.scrollIntoView({ behavior: 'auto', block: 'start' });
    };

    return (
        <div
            id="colored_button"
            className="inline-block h-[42px] content-center mx-[8px] px-[18px] bg-[#0d0d0e] text-[14px] text-[#ff6347] border-[rgb(32,33,38)] 
                        cursor-pointer hover:border-[#ff6347] transition-all ease-in-out duration-300 rounded-[4px] border-[.55px]
                        font-['Source_Code_Pro'] font-[600] tracking-[1.77px] leading-[32px] uppercase select-none "
            onClick={() => {
                jumpTo(dest);
            }} >
            <img
                src={`/assets/icons/${icon_file}`}
                alt="icon"
                className="inline w-[16px] h-[16px] mr-2"
            />
            {btn_text}
        </div>
    );
}

export default IconDisplayComponent;