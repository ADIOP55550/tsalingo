// src/components/AnimatedQuizCard.jsx
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import QuizCard from './QuizCard';

function AnimatedQuizCard({ image, onDrop }) {
    const [props, set] = useSpring(() => ({
        x: 0,
        y: 0,
        rotateZ: 0,
        scale: 1,
        config: { tension: 300, friction: 30 },
    }));

    const bind = useDrag(({ down, movement: [mx, my] }) => {
        set({ x: down ? mx : 0, y: down ? my : 0, rotateZ: down ? mx / 10 : 0 }),
    });

    const handleDrop = () => {
        console.log('los');
        if (onDrop) {
            onDrop({ image });
        }
    };

    return (
        <animated.div
            {...bind()}
            onDrop={handleDrop} // Ensure the handleDrop function is called on drop
            onDragOver={(e) => e.preventDefault()} // Necessary for onDrop to work
            style={{
                transform: props.x.to((x) => `translateX(${x}px)`)
                    .to((x) => `${x} translateY(${props.y.get()}px)`)
                    .to((x) => `${x} rotate(${props.rotateZ.get()}deg)`),
                width: '200px', // Set the width to appropriate value
                height: '300px', // Set the height to appropriate value
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <QuizCard image={image} />
        </animated.div>
    );
}

export default AnimatedQuizCard;
