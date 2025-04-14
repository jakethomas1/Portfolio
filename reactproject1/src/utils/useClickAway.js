import { useEffect, useRef } from 'react';

export function useClickAway(onClickAway) {
    const ref = useRef(null);

    useEffect(() => {
        function handleClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickAway();
            }
        }

        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [onClickAway]);

    return ref;
}
