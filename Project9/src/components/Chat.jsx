import React, { useState } from 'react';

const Chat = ({ currentUser, messages, setMessages, users }) => {
  const [toUser, setToUser] = useState(users.find(u => u !== currentUser));
  const [text, setText] = useState('');

  const sendMessage = () => {
    if (text) {
      setMessages([...messages, { from: currentUser, to: toUser, text }]);
      setText('');
    }
  };

  const userMessages = messages.filter(m =>
    (m.from === currentUser && m.to === toUser) || (m.from === toUser && m.to === currentUser)
  );

  return (
    <div className="chat">
      <h3>Chat with {toUser}</h3>
      <select value={toUser} onChange={(e) => setToUser(e.target.value)}>
        {users.filter(u => u !== currentUser).map(u => (
          <option key={u} value={u}>{u}</option>
        ))}
      </select>
      <div className="messages">
        {userMessages.map((m, i) => (
          <p key={i}><strong>{m.from}:</strong> {m.text}</p>
        ))}
      </div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Type a message..."
      />
    </div>
  );
};

export default Chat;