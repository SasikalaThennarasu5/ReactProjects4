// App.jsx (Frontend-only Project Management SaaS)
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TeamList from './components/TeamList';
import ProjectBoard from './components/ProjectBoard';
import TaskBoard from './components/TaskBoard';
import NotificationPanel from './components/NotificationPanel';
import './App.css';

const App = () => {
  const [user, setUser] = useState({ name: 'Alice', role: 'admin', team: 'Dev Team' });
  const [teams, setTeams] = useState([
    { name: 'Dev Team', members: ['Alice', 'Bob'] },
    { name: 'QA Team', members: ['Charlie'] }
  ]);
  const [projects, setProjects] = useState([
    { id: 1, name: 'SaaS Dashboard', team: 'Dev Team' }
  ]);
  const [tasks, setTasks] = useState([
    { id: 1, projectId: 1, title: 'Design UI', assignee: 'Bob', status: 'To Do' }
  ]);
  const [notifications, setNotifications] = useState([]);

  return (
    <div className="app">
      <Navbar user={user} setUser={setUser} teams={teams} />
      <div className="main">
        <TeamList user={user} teams={teams} setTeams={setTeams} />
        <ProjectBoard
          user={user}
          projects={projects}
          setProjects={setProjects}
          team={user.team}
        />
        <TaskBoard
          user={user}
          projects={projects}
          tasks={tasks}
          setTasks={setTasks}
          setNotifications={setNotifications}
        />
        <NotificationPanel notifications={notifications} />
      </div>
    </div>
  );
};

export default App;