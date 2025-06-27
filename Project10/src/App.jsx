import React, { useState } from 'react';
import Navbar from './components/Navbar';
import JobList from './components/JobList';
import JobApply from './components/JobApply';
import CompanyDashboard from './components/CompanyDashboard';
import UserDashboard from './components/UserDashboard';
import AdminPanel from './components/AdminPanel';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState({ name: 'Alice', role: 'user' });
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="app">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <div className="main">
        {currentUser.role === 'user' && (
          <>
            <JobList jobs={jobs} setSelectedJob={setSelectedJob} />
            {selectedJob && (
              <JobApply
                job={selectedJob}
                applicant={currentUser.name}
                setApplications={setApplications}
                applications={applications}
              />
            )}
            <UserDashboard applications={applications} currentUser={currentUser.name} jobs={jobs} />
          </>
        )}
        {currentUser.role === 'company' && (
          <CompanyDashboard
            company={currentUser.name}
            jobs={jobs}
            setJobs={setJobs}
            applications={applications}
          />
        )}
        {currentUser.role === 'admin' && (
          <AdminPanel jobs={jobs} applications={applications} />
        )}
      </div>
    </div>
  );
};

export default App;
