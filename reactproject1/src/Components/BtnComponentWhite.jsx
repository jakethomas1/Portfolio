
const IconDisplayComponent = ({ btn_text, icon_file, dest }) => {
    return (
        <div
            id="white_button"
            className="inline-block h-[42px] content-center mx-[8px] px-[18px] bg-[#f4f6fc] text-[14px] text-[#060606] 
                        cursor-pointer hover:bg-[#ff6347] transition-all ease-in-out duration-300 rounded-[4px]
                        font-['Source_Code_Pro'] font-[600] tracking-[1.77px] leading-[32px] uppercase"
            onClick={() => {
                window.location.href = dest;
            }}>
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