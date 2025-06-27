import React, { useState } from 'react';

const CompanyDashboard = ({ company, jobs, setJobs, applications }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlePost = () => {
    const newJob = {
      id: Date.now(),
      title,
      description,
      company,
      postedBy: company
    };
    setJobs([...jobs, newJob]);
    setTitle('');
    setDescription('');
  };

  const myJobs = jobs.filter(j => j.company === company);

  return (
    <div className="company-dashboard">
      <h3>Company Dashboard</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Job title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Job description" />
      <button onClick={handlePost}>Post Job</button>

      <h4>Your Jobs</h4>
      {myJobs.map(job => (
        <div key={job.id} className="job-item">
          <h5>{job.title}</h5>
          <p>{job.description}</p>
          <ul>
            {applications
              .filter(a => a.jobId === job.id)
              .map((a, i) => (
                <li key={i}>{a.applicant} - {a.email}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CompanyDashboard;