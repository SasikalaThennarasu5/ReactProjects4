import React, { useState } from 'react';

const TaskBoard = ({ user, projects, tasks, setTasks, setNotifications }) => {
  const [title, setTitle] = useState('');
  const [assignee, setAssignee] = useState('');
  const [projectId, setProjectId] = useState(projects[0]?.id || 0);

  const createTask = () => {
    const newTask = {
      id: Date.now(),
      title,
      assignee,
      projectId,
      status: 'To Do'
    };
    setTasks([...tasks, newTask]);
    setNotifications(n => [...n, `Task "${title}" assigned to ${assignee}`]);
    setTitle('');
    setAssignee('');
  };

  const visibleTasks = tasks.filter(task =>
    user.role === 'admin' || user.role === 'manager'
      ? projects.find(p => p.id === task.projectId)?.team === user.team
      : task.assignee === user.name
  );

  return (
    <div className="task-board">
      <h3>Tasks</h3>
      {(user.role === 'admin' || user.role === 'manager') && (
        <>
          <select onChange={(e) => setProjectId(+e.target.value)} value={projectId}>
            {projects.filter(p => p.team === user.team).map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" />
          <input value={assignee} onChange={(e) => setAssignee(e.target.value)} placeholder="Assign to" />
          <button onClick={createTask}>Create Task</button>
        </>
      )}
      {visibleTasks.map(t => (
        <div key={t.id} className="task-item">
          <strong>{t.title}</strong> → {t.assignee} [{t.status}]
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
