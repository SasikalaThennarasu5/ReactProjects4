import React from 'react';

const Navbar = ({ currentUser, setCurrentUser }) => {
  const roles = [
    { name: 'Alice', role: 'user' },
    { name: 'TechCorp', role: 'company' },
    { name: 'Admin', role: 'admin' }
  ];

  return (
    <nav className="navbar">
      <h2>Job Portal</h2>
      <select
        value={currentUser.name}
        onChange={(e) => {
          const selected = roles.find(r => r.name === e.target.value);
          setCurrentUser(selected);
        }}
      >
        {roles.map(r => (
          <option key={r.name} value={r.name}>{r.name} ({r.role})</option>
        ))}
      </select>
    </nav>
  );
};

export default Navbar;  