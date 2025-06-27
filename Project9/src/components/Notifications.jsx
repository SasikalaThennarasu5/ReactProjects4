import React from 'react';

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <ul>
        {notifications.map((n, i) => (
          <li key={i}>
            {n.from} {n.type === 'like' ? 'liked' : 'commented on'} a post
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
