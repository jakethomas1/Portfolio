import React, { useState, useMemo, useEffect } from 'react';
import './DotGrid.css';  // Make sure to include your CSS file for styling

const DotGridComponent = ({ dots, containerRef }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // MouseMove event listener
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

    // Scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            // Track the cursor position during scroll (not directly related to the scroll event)
            const rect = containerRef.current.getBoundingClientRect();
            // Update the cursor position based on current mouse coordinates
            setCursorPosition((prevPosition) => {
                return {
                    x: prevPosition.x - rect.left, // Track relative position to container during scroll
                    y: prevPosition.y - rect.top,
                };
            });
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calculate which dots are "active" (close to the cursor)
    const dotDistanceCategories = useMemo(() => {
        const categories = {
            close: [],
            medium: [],
            far: [],
        };

        dots.forEach((dot, index) => {
            const distance = Math.hypot(cursorPosition.x - dot.x, cursorPosition.y - dot.y);

            if (distance < 60) {
                categories.close.push(index);  // Close to the cursor
            } else if (distance >= 60 && distance < 85) {
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
        <div className="dot-container relative h-[90vh] mb-[5vh] w-screen" ref={containerRef}>
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
                            transition: 'transform 0.5s ease-out',  // Smooth transition for dot movement
                        }}
                    />
                );
            })}
        </div>
    );
};

export default DotGridComponent;
