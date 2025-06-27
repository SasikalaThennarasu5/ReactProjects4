import React from 'react';

const Navbar = ({ user, setUser, teams }) => {
  const roles = ['admin', 'manager', 'member'];
  return (
    <div className="navbar">
      <h2>Project Manager SaaS</h2>
      <div className="user-switcher">
        <select
          value={user.name}
          onChange={(e) => {
            const name = e.target.value;
            const role = roles[Math.floor(Math.random() * roles.length)];
            const team = teams.find(t => t.members.includes(name))?.name || teams[0].name;
            setUser({ name, role, team });
          }}
        >
          {[...new Set(teams.flatMap(t => t.members))].map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
        <span>({user.role}) - {user.team}</span>
      </div>
    </div>
  );
};

export default Navbar;