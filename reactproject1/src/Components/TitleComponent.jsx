import React, { useEffect } from 'react';

const TitleComponent = () => {
    useEffect(() => {
        document.title = 'Jacob Thomas | Software Developer'; // Change the document title
    }, []);
    return null;
};

export default TitleComponent;