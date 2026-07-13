
const IconDisplayComponent = ({ languages }) => {
    
    return (
        <>
            {languages.map((lang) => (
                <div className="icon-container ">
                    <img
                        src={`/assets/icons/${lang}.png`} //Note: the [lang] field in project_data aligns with an icon asset of the same name with the png file ext. appended
                        className="max-w-full max-h-full"/>
                </div>
            ))}
        </>
    ); //Note console-underscore styling is set in ConsoleTextAnimation.js
};

export default IconDisplayComponent;
