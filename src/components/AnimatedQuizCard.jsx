import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import QuizCard from './QuizCard';

function AnimatedQuizCard({ image }) {
    const [props, set] = useSpring(() => ({
        x: 0,
        y: 0,
        rotateZ: 0,
        scale: 1,
        config: { tension: 300, friction: 30 },
    }));

    const [dropZone, setDropZone] = useState(null);

    const handleDrop = (event) => {
        event.preventDefault();
        const zone = event.target.id;
        setDropZone(zone);
    };

    const [thisDisplay, setThisDisplay] = useState('block');
    const [thisClass, setThisClass] = useState('green-overlay-fade-in');

    const bind = useGesture({
        onDrag: ({ active, movement: [x, y] }) => {
            set({ x, y, scale: active ? 1.2 : 1 });
        },
        onDragEnd: ({ xy }) => {
            console.log(xy);
            console.log("test");
            const elements = document.elementsFromPoint(xy[0], xy[1]);
            console.log(elements);

            let blindzone = false;

            // Check if any element has both 'elem.id take' and 'elem.id leave'
            for (const elem of elements) {
                if (elem.id.includes('take') && elem.id.includes('leave')) {
                    blindzone = true;
                    break;
                }
            }
            //check if array has elem.id take and elem.id leave both 

            let foundDropZone = false;
            elements.forEach((elem) => {
                if (!blindzone) {
                    if (elem.id === 'take') {
                        console.log('Dropped on: #take');
                        setDropZone('take');
                        //create red animation with green color overlay and make display none
                        setThisClass('green-overlay fade-out');

                        setTimeout(() => {
                            setThisDisplay('none');
                        }, 200);



                        foundDropZone = true;
                    } else if (elem.id === 'leave') {
                        console.log('Dropped on: #leave');
                        setDropZone('leave');
                        //create fadeout animation with green color overlay and make display none
                        setThisClass('green-overlay fade-out');

                        setTimeout(() => {
                            setThisDisplay('none');
                        }, 200);


                        foundDropZone = true;
                    }
                }

            });



        },
    });

    // Listen for the drop event on the document
    React.useEffect(() => {
        document.addEventListener('drop', handleDrop);
        return () => {
            document.removeEventListener('drop', handleDrop);
        };
    }, []);

    return (

        <div style={{ display: thisDisplay, position: 'relative' }} className={thisClass}>
            <animated.div
                {...bind()}
                style={{
                    transform: props.x
                        .to((x) => `translateX(${x}px)`)
                        .to((x) => `${x} translateY(${props.y.get()}px)`)
                        .to((x) => `${x} rotate(${props.rotateZ.get()}deg)`),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <QuizCard image={image} />
            </animated.div>
            {
                dropZone && (
                    <p>
                        Dropped {image} in {dropZone}
                    </p>
                )
            }
        </div >
    );
}

export default AnimatedQuizCard;
