import React from 'react';

const Friends = ({ users, currentUser, friends, setFriends }) => {
  const sendRequest = (user) => {
    setFriends(prev => ({
      ...prev,
      [currentUser]: [...prev[currentUser], user],
      [user]: [...prev[user], currentUser]
    }));
  };

  const currentFriends = friends[currentUser] || [];

  return (
    <div className="friends">
      <h3>Friends</h3>
      <ul>
        {currentFriends.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <h4>Add Friends</h4>
      {users.filter(u => u !== currentUser && !currentFriends.includes(u)).map(u => (
        <button key={u} onClick={() => sendRequest(u)}>Add {u}</button>
      ))}
    </div>
  );
};

export default Friends;