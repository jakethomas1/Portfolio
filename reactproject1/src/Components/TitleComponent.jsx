import React, { useEffect } from 'react';

const TitleComponent = () => {
    useEffect(() => {
        document.title = 'Jacob Thomas | Software Developer'; // Initial state of this should be set in index.html
    }, []);
    return null;
};

export default TitleComponent;