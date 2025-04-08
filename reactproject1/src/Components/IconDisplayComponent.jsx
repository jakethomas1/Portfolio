
const IconDisplayComponent = ({ languages }) => {
    
    return (
        <>
            {languages.map((lang) => (
                <div className="icon-container ">
                    <img
                        src={`/assets/icons/${lang}.png`}
                        className="max-w-full max-h-full"/>
                </div>
            ))}
        </>
    ); //Note console-underscore styling is set in ConsoleTextAnimation.js
};

export default IconDisplayComponent;
