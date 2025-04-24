import React from 'react';

const HomeItem = ({ children }) => {
    return (
        <div className="h-screen w-full sticky top-0 flex items-center justify-center bg-[#181818] border-b border-[#2a2a2a]">
            <div className="text-white text-center w-3/4">
                {/* Replace this with whatever content you want inside each item */}
                {children || (
                    <>
                        <h2 className="text-3xl font-bold mb-4">Home Item Title</h2>
                        <p className="text-lg">This is a placeholder for home item content.</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default HomeItem;