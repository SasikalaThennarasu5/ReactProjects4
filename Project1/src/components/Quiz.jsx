import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState({});

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });
    setScore(correct);
  };

  return (
    <div>
      <h4>Quiz</h4>
      {questions.map((q, index) => (
        <div key={index}>
          <p>{q.question}</p>
          {q.options.map((opt, i) => (
            <label key={i}>
              <input
                type="radio"
                name={`q${index}`}
                value={opt}
                onChange={(e) => setAnswers({ ...answers, [index]: e.target.value })}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {score !== null && <p>Your Score: {score} / {questions.length}</p>}
    </div>
  );
};

export default Quiz;
