import { useParams } from 'react-router-dom';
import DraggableQuizCard from '../components/DraggableQuizCard';
import AnimatedQuizCard from '../components/AnimatedQuizCard';
import DropZone from '../components/DropZone';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function Quiz() {
    const { levelName } = useParams();

    const handleDrop = (item, zone) => {
        console.log(`Dropped ${item.image} in ${zone}`);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="h-full w-full">
                <div className="mt-4 flex justify-center">
                    <h1>Quiz for {levelName}</h1>
                </div>
                <div className="flex w-full -mx-4 h-2/3">
                    <DropZone id="take" onDrop={handleDrop}>
                        <div className="w-1/2 h-full pr-5 justify-left align-center pt-5">
                            <div className="bg-indigo-500 w-40 h-40 block"></div>
                            <p className="pl-5">...Take it</p>
                        </div>
                    </DropZone>
                    <DropZone id="leave" onDrop={handleDrop}>
                        <div className="w-1/2 h-full pl-5 justify-right align-center text-right pt-5">
                            <div className="bg-red-500 w-40 h-40 block"></div>
                            <p>Leave it...</p>
                        </div>
                    </DropZone>
                </div>

            </div>
            <div className="flex justify-center align-center">
                {/* <DraggableQuizCard image={levelName} />*/}
                <AnimatedQuizCard image={levelName} />
            </div>
        </DndProvider>
    );
}
