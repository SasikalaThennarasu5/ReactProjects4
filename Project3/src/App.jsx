import React from 'react';
import Poll from './components/Poll';
import './styles.css';

const App = () => {
  return (
    <div className="container">
      <h1 style={{ color: '#2196f3' }}>Online Voting App</h1>
      <Poll />
    </div>
  );
};

export default App;
