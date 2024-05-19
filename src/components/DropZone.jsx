import { useDrop } from 'react-dnd';
import { ItemTypes } from '../constants';
function DropZone({ id, onDrop, children }) {
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: ItemTypes.QUIZCARD,
        drop: (item) => onDrop(item, id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }));

    return (
        <div ref={drop} style={{ backgroundColor: isOver ? 'lightgreen' : 'white' }}>
            {children}
        </div>
    );
}

export default DropZone;
