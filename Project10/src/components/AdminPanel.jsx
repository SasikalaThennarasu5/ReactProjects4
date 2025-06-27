import React from 'react';

const AdminPanel = ({ jobs, applications }) => {
  return (
    <div className="admin-panel">
      <h3>Admin Panel</h3>
      <h4>All Jobs</h4>
      {jobs.map(job => (
        <div key={job.id} className="job-item">
          <h5>{job.title} at {job.company}</h5>
          <p>{job.description}</p>
        </div>
      ))}
      <h4>All Applications</h4>
      {applications.map((a, i) => (
        <p key={i}>{a.applicant} applied to job ID {a.jobId}</p>
      ))}
    </div>
  );
};

export default AdminPanel;
