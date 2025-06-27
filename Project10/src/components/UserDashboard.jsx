import React from 'react';

const UserDashboard = ({ applications, currentUser, jobs }) => {
  const myApps = applications.filter(a => a.applicant === currentUser);
  return (
    <div className="user-dashboard">
      <h3>My Applications</h3>
      {myApps.length === 0 && <p>No applications yet.</p>}
      {myApps.map((app, i) => {
        const job = jobs.find(j => j.id === app.jobId);
        return (
          <div key={i} className="job-item">
            <h4>{job?.title}</h4>
            <p>Company: {job?.company}</p>
            <p>Resume: <a href={app.resume} target="_blank">{app.resume}</a></p>
          </div>
        );
      })}
    </div>
  );
};

export default UserDashboard;