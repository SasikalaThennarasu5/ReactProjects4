// App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Friends from './components/Friends';
import Chat from './components/Chat';

import Notifications from './components/Notifications';
import './App.css';

const users = ['Alice', 'Bob', 'Charlie'];

export default function App() {
  const [currentUser, setCurrentUser] = useState('Alice');
  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState({ Alice: ['Bob'], Bob: ['Alice'], Charlie: [] });
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);

  return (
    <div className="app">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} />
      <div className="main">
        <Feed
          posts={posts}
          setPosts={setPosts}
          currentUser={currentUser}
          notify={setNotifications}
        />
        <Friends
          users={users}
          currentUser={currentUser}
          friends={friends}
          setFriends={setFriends}
        />
        <Chat
          currentUser={currentUser}
          messages={messages}
          setMessages={setMessages}
          users={users}
        />
        <Notifications notifications={notifications} />
      </div>
    </div>
  );
}
