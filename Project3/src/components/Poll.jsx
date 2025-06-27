import React, { useState, useEffect } from 'react';
import { poll } from '../data/pollData';
import VoteForm from './VoteForm';
import Results from './Results';

const Poll = () => {
  const [votes, setVotes] = useState(() => {
    const saved = localStorage.getItem(`votes-${poll.id}`);
    return saved ? JSON.parse(saved) : {};
  });

  const [hasVoted, setHasVoted] = useState(() => {
    return localStorage.getItem(`voted-${poll.id}`) === 'true';
  });

  const handleVote = (option) => {
    const updatedVotes = { ...votes, [option]: (votes[option] || 0) + 1 };
    setVotes(updatedVotes);
    setHasVoted(true);
    localStorage.setItem(`votes-${poll.id}`, JSON.stringify(updatedVotes));
    localStorage.setItem(`voted-${poll.id}`, 'true');
  };

  return (
    <div>
      <VoteForm poll={poll} onVote={handleVote} hasVoted={hasVoted} />
      <Results poll={poll} votes={votes} />
    </div>
  );
};

export default Poll;
