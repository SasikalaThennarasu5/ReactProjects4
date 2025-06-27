import React from 'react';

const NotificationPanel = ({ notifications }) => (
  <div className="notifications">
    <h3>Notifications</h3>
    {notifications.length === 0 && <p>No notifications</p>}
    <ul>
      {notifications.map((n, i) => <li key={i}>{n}</li>)}
    </ul>
  </div>
);

export default NotificationPanel;
