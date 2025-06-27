import React, { useState } from 'react';

const ProjectBoard = ({ user, projects, setProjects, team }) => {
  const [projectName, setProjectName] = useState('');

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      name: projectName,
      team
    };
    setProjects([...projects, newProject]);
    setProjectName('');
  };

  const filtered = projects.filter(p => p.team === team);

  return (
    <div className="project-board">
      <h3>Projects ({team})</h3>
      {(user.role === 'admin' || user.role === 'manager') && (
        <>
          <input value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="Project name" />
          <button onClick={addProject}>Create Project</button>
        </>
      )}
      {filtered.map(p => (
        <div key={p.id} className="project-item">{p.name}</div>
      ))}
    </div>
  );
};

export default ProjectBoard;