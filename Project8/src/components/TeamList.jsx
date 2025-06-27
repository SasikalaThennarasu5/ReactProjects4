import React, { useState } from 'react';

const TeamList = ({ user, teams, setTeams }) => {
  const [teamName, setTeamName] = useState('');
  const [member, setMember] = useState('');

  const addTeam = () => {
    if (teamName) {
      setTeams([...teams, { name: teamName, members: [] }]);
      setTeamName('');
    }
  };

  const addMember = (team) => {
    const updated = teams.map(t =>
      t.name === team.name ? { ...t, members: [...t.members, member] } : t
    );
    setTeams(updated);
    setMember('');
  };

  return (
    <div className="team-list">
      <h3>Teams</h3>
      {user.role === 'admin' && (
        <>
          <input value={teamName} onChange={e => setTeamName(e.target.value)} placeholder="New team name" />
          <button onClick={addTeam}>Create Team</button>
        </>
      )}
      {teams.map(team => (
        <div key={team.name} className="team-box">
          <h4>{team.name}</h4>
          <p>Members: {team.members.join(', ')}</p>
          {user.role === 'admin' && (
            <>
              <input value={member} onChange={e => setMember(e.target.value)} placeholder="Add member" />
              <button onClick={() => addMember(team)}>Add Member</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TeamList;