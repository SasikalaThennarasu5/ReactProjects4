import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import './styles.css';

const App = () => (
  <div className="app">
    <h2>🗂️ Kanban Project Manager</h2>
    <KanbanBoard />
  </div>
);

export default App;
