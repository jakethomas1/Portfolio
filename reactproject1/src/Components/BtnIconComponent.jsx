// Button with an optional leading icon. `color` picks the skin; `dest` decides the
// render: an http(s) URL becomes an anchor (new tab), anything else is treated as
// an element id and smooth-scrolls to it.
const base =
    "inline-flex h-auto items-center px-[18px] text-[14px] rounded-[4px] " +
    "font-['Source_Code_Pro'] font-[600] tracking-[1.77px] leading-[40px] uppercase shrink-0 " +
    "cursor-pointer no-underline transition-colors ease-in-out duration-300 whitespace-nowrap ";

const colors = {
    ghost:
        "bg-[#0d0d0e] text-[#ff6347] border-[.55px] border-[rgb(32,33,38)] " +
        "hover:border-[#ff6347] select-none",
    white: "bg-[#f4f6fc] text-[#060606] hover:bg-[#ff6347] border-[.55px] border-[rgb(52,53,58)] ",
};

const isExternal = (dest) => /^https?:\/\//i.test(dest ?? '');

const BtnIconComponent = ({
    btn_text,
    icon_file,
    dest,
    size = 16,
    color = 'white',
    iconColor,
    className,
    ...rest
}) => {
    const classes = [base, colors[color], className].filter(Boolean).join(' ');
    const element_id = dest?.replace(/^#/, '');
    const id = `${color}_button`;
    const isSvg = Boolean(icon_file?.toLowerCase().endsWith('.svg'));

    const content = (
        <>
            {icon_file && (
                isSvg && iconColor ? (
                    <span
                        aria-hidden="true"
                        className="flex-none inline-block mr-2 align-middle"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            backgroundColor: iconColor,
                            WebkitMask: `url(/assets/icons/${icon_file}) no-repeat center / contain`,
                            mask: `url(/assets/icons/${icon_file}) no-repeat center / contain`,
                        }}
                    />
                ) : (
                    <img
                        src={`/assets/icons/${icon_file}`}
                        alt=""
                        aria-hidden="true"
                        className="flex-none inline mr-2"
                        style={{ width: `${size}px`, height: `${size}px` }}
                    />
                )
            )}
            {btn_text}
        </>
    );

    if (isExternal(dest)) {
        return (
            <a
                {...rest}
                id={id}
                href={dest}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            {...rest}
            id={id}
            type="button"
            className={classes}
            onClick={() => {
                document.getElementById(element_id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
        >
            {content}
        </button>
    );
};

export default BtnIconComponent;
