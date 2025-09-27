import { Link } from 'react-router-dom';
import type { RefObject } from 'react';

interface FooterProps {
    footerRef: RefObject<HTMLDivElement>;
}

const FooterComponent = ({ footerRef }: FooterProps ) => {
    type Icon = { src: string; alt: string; href: string; };
    const icons: Icon[] = []
    /* const icons: Icon[] = [
        { src: "/assets/icons/black-white-icon-youtube.svg", alt: "Youtube", href: "https://www.youtube.com/@joethethomas" },
        { src: "/assets/icons/black-white-icon-envelope.svg", alt: "Mail", href: "/contact" }];*/

    const links = [
        { label: "GitHub", href: "https://github.com/jakethomas1", extraClass: "pr-4 border-r border-gray-700" },
        { label: "LinkedIn", href: "https://linkedin.com/in/jakethomas1", extraClass: "px-4 border-r border-gray-700" },
        { label: "Contact", href: "mailto:jacobmthomasb@gmail.com", extraClass: "pl-4" },
    ];

    return (

        <>
            <div
                ref={footerRef}
                id="footer_container"
                className="w-full border-t border-gray-700 flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center justify-center
                           px-8 py-auto h-48 relative z-10 shadow-[0em_0em_12px_10px_rgba(0,0,0,0.7)] overflow-visible">
                <div
                    className="text-left flex flex-row items-center my-[16px]"
                >
                    <div>
                        <img
                            className="w-[48px] h-[48px] cursor-pointer"
                            src="/assets/icons/jt-icon-512x512.png" alt="JT Icon"
                            onClick={() => {
                                document.getElementById("base_html")?.scrollIntoView({ behavior: 'auto', block: 'start' });
                            }} />
                    </div>
                    <div
                        className="segoe font-[600] px-2 cursor-pointer"
                        onClick={() => {
                            document.getElementById("base_html")?.scrollIntoView({ behavior: 'auto', block: 'start' });
                        }}>Jacob Thomas</div>
                </div>

                <div className="text-center segoe font-[400] my-[16px] text-purple-400">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${link.extraClass} py-[16px]`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="text-right flex justify-end gap-4">
                    {icons.map(({ src, alt, href }) => {
                        const isInternal = href && href.startsWith("/");
                        return isInternal ? (       //This conditional to use Link when appropriate, <a> tag when not
                            <Link key={src} to={href} className="min-w-[32px] min-h-[32px] mx-[6px] nav-icon-animation">
                                <img src={src} alt={alt} className="max-w-[32px] max-h-[32px] object-contain text-transparent" />
                            </Link>
                        ) : (
                            <a
                                key={src}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="min-w-[32px] min-h-[32px] mx-[6px]"
                            >
                                <img src={src} alt={alt} className="max-w-[32px] max-h-[32px] object-contain text-transparent" />
                            </a>
                        );
                    })}
                </div>
            </div>

        </>
    );
}

export default FooterComponent;