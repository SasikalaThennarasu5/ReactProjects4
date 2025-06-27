import React, { useState } from 'react';

const JobApply = ({ job, applicant, setApplications, applications }) => {
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');

  const handleSubmit = () => {
    const newApp = {
      jobId: job.id,
      applicant,
      email,
      resume
    };
    setApplications([...applications, newApp]);
    setEmail('');
    setResume('');
    alert('Application submitted!');
  };

  return (
    <div className="apply-form">
      <h3>Apply for {job.title}</h3>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Resume Link"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default JobApply;
