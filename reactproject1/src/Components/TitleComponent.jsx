import React, { useEffect } from 'react';

const TitleComponent = () => {
    useEffect(() => {
        document.title = 'jakethomas1'; // Change the document title
    }, []);
    return null;
};

export default TitleComponent;