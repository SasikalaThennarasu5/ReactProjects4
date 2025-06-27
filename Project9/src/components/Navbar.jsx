import React from 'react';

const Navbar = ({ currentUser, setCurrentUser, users }) => {
  return (
    <nav className="navbar">
      <h2>React Social</h2>
      <select value={currentUser} onChange={(e) => setCurrentUser(e.target.value)}>
        {users.map((user) => (
          <option key={user} value={user}>{user}</option>
        ))}
      </select>
    </nav>
  );
};

export default Navbar;
