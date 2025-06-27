import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>Progress: {Math.round(progress)}%</label>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
