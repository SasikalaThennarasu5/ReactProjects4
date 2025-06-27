import React, { useState } from 'react';
import Column from './Column';
import { DragDropContext } from '@hello-pangea/dnd';

const initialData = {
  todo: [{ id: '1', text: 'Design UI' }],
  inProgress: [{ id: '2', text: 'Build components' }],
  done: [{ id: '3', text: 'Setup repo' }],
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const srcCol = [...columns[source.droppableId]];
    const [movedTask] = srcCol.splice(source.index, 1);
    const destCol = [...columns[destination.droppableId]];
    destCol.splice(destination.index, 0, movedTask);

    setColumns({
      ...columns,
      [source.droppableId]: srcCol,
      [destination.droppableId]: destCol,
    });
  };

  const addTask = (colId, text) => {
    const newTask = { id: Date.now().toString(), text };
    setColumns({
      ...columns,
      [colId]: [...columns[colId], newTask],
    });
  };

  const deleteTask = (colId, taskId) => {
    setColumns({
      ...columns,
      [colId]: columns[colId].filter(task => task.id !== taskId),
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {Object.entries(columns).map(([colId, tasks]) => (
          <Column
            key={colId}
            colId={colId}
            title={colId.replace(/([A-Z])/g, ' $1')}
            tasks={tasks}
            addTask={addTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
