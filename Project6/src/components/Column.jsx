import React, { useState } from 'react';
import { Droppable } from '@hello-pangea/dnd';
import TaskCard from './TaskCard';

const Column = ({ colId, title, tasks, addTask, deleteTask }) => {
  const [text, setText] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(colId, text);
      setText('');
    }
  };

  return (
    <div className="column">
      <h3>{title}</h3>
      <Droppable droppableId={colId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="task-list">
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                onDelete={() => deleteTask(colId, task.id)}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add task"
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default Column;
