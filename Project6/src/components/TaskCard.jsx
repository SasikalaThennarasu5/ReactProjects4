import React from 'react';
import { Draggable } from '@hello-pangea/dnd';

const TaskCard = ({ task, index, onDelete }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task-card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.text}
          <button className="delete-btn" onClick={onDelete}>❌</button>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
