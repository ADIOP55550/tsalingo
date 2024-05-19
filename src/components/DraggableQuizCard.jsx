import { useDrag } from 'react-dnd';
import QuizCard from './QuizCard';
import { ItemTypes } from '../constants';


function DraggableQuizCard({ image }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.QUIZCARD,
        item: { image },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <QuizCard image={image} />
        </div>
    );
}

export default DraggableQuizCard;
