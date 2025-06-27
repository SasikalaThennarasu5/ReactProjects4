import React from 'react';

const JobList = ({ jobs, setSelectedJob }) => {
  return (
    <div className="job-list">
      <h3>Available Jobs</h3>
      {jobs.length === 0 && <p>No jobs posted yet.</p>}
      {jobs.map(job => (
        <div key={job.id} className="job-item">
          <h4>{job.title} at {job.company}</h4>
          <p>{job.description}</p>
          <button onClick={() => setSelectedJob(job)}>Apply</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;