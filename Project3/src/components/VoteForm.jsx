import React, { useState } from 'react';

const VoteForm = ({ poll, onVote, hasVoted }) => {
  const [selected, setSelected] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected && !hasVoted) {
      onVote(selected);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>{poll.question}</h3>
      {poll.options.map((opt, idx) => (
        <label key={idx}>
          <input
            type="radio"
            value={opt}
            name="vote"
            disabled={hasVoted}
            onChange={(e) => setSelected(e.target.value)}
          />
          {opt}
        </label>
      ))}
      <button type="submit" disabled={hasVoted || !selected}>
        {hasVoted ? "You have voted" : "Submit Vote"}
      </button>
    </form>
  );
};

export default VoteForm;
