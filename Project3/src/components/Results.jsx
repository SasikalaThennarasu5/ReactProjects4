import React from 'react';

const Results = ({ votes, poll }) => {
  const total = Object.values(votes).reduce((sum, count) => sum + count, 0);

  return (
    <div className="card">
      <h3>Live Results</h3>
      {poll.options.map((opt) => {
        const count = votes[opt] || 0;
        const percent = total ? ((count / total) * 100).toFixed(1) : 0;
        return (
          <div key={opt} style={{ marginBottom: '10px' }}>
            <strong>{opt}</strong> - {count} votes ({percent}%)
            <div
              style={{
                height: '10px',
                backgroundColor: '#4caf50',
                width: `${percent}%`,
                borderRadius: '5px',
              }}
            ></div>
          </div>
        );
      })}
      <p>Total votes: {total}</p>
    </div>
  );
};

export default Results;
