import React, { useState, useMemo, useEffect } from 'react';
import './DotGrid.css';  // Make sure to include your CSS file for styling

const DotGridComponent = ({ dots, containerRef }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // Handle mouse move event to track cursor position inside the container
    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = containerRef.current.getBoundingClientRect();
            setCursorPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [containerRef]);  // Re-run on container ref change

    // Calculate which dots are "active" (close to the cursor)
    const dotDistanceCategories = useMemo(() => {
        const categories = {
            close: [],
            medium: [],
            far: [],
        };

        dots.forEach((dot, index) => {
            const distance = Math.hypot(cursorPosition.x - dot.x, cursorPosition.y - dot.y);

            if (distance < 80) {
                categories.close.push(index);  // Close to the cursor
            } else if (distance >= 80 && distance < 200) {
                categories.medium.push(index);  // Medium distance from the cursor
            } else {
                categories.far.push(index);  // Far from the cursor
            }
        });

        return categories;
    }, [dots, cursorPosition]);  // Ensure it re-renders when cursorPosition changes

    // Calculate translation based on distance
    const calculateTranslation = (dot, distance, factor = 0.9) => {
        const angle = Math.atan2(cursorPosition.y - dot.y, cursorPosition.x - dot.x);
        const moveX = (distance * factor) * Math.cos(angle);
        const moveY = (distance * factor) * Math.sin(angle);
        return { translateX: moveX, translateY: moveY };
    };

    return (
        <div className="dot-container h-screen w-screen" ref={containerRef}>
            {/* Render Dots */}
            {dots.map((dot, index) => {
                let dotClass = '';
                let transform = '';

                // Check if the dot is close, medium, or far
                if (dotDistanceCategories.close.includes(index)) {
                    dotClass = 'active-dot'; // Close dots (will move towards cursor)
                    const { translateX, translateY } = calculateTranslation(dot, Math.hypot(cursorPosition.x - dot.x, cursorPosition.y - dot.y), 1);
                    transform = `translate(${translateX}px, ${translateY}px)`;  // Apply translation for close dots
                } else if (dotDistanceCategories.medium.includes(index)) {
                    dotClass = 'medium-dot'; // Medium distance dots
                    const { translateX, translateY } = calculateTranslation(dot, Math.hypot(cursorPosition.x - dot.x, cursorPosition.y - dot.y), 0.6); // 45% movement for medium distance
                    transform = `translate(${translateX}px, ${translateY}px)`;  // Apply translation for medium dots
                } else {
                    dotClass = 'far-dot'; // Far dots (no movement)
                }

                return (
                    <div
                        key={dot.x + '-' + dot.y}  // Unique key for each dot
                        className={`dot ${dotClass}`}
                        style={{
                            left: dot.x + 'px',
                            top: dot.y + 'px',
                            transform: transform,  // Apply calculated transformation
                            transition: 'transform 0.3s ease-out',  // Smooth transition for dot movement
                        }}
                    />
                );
            })}
        </div>
    );
};

export default DotGridComponent;
