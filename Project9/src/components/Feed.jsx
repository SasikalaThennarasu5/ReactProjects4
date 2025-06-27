import React, { useState } from 'react';

const Feed = ({ posts, setPosts, currentUser, notify }) => {
  const [text, setText] = useState('');

  const handlePost = () => {
    const newPost = {
      id: Date.now(),
      user: currentUser,
      text,
      likes: [],
      comments: []
    };
    setPosts([newPost, ...posts]);
    setText('');
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId && !post.likes.includes(currentUser)
        ? { ...post, likes: [...post.likes, currentUser] }
        : post
    ));
    notify(prev => [...prev, { type: 'like', from: currentUser, postId }]);
  };

  const handleComment = (postId, comment) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, comments: [...post.comments, { user: currentUser, text: comment }] }
        : post
    ));
    notify(prev => [...prev, { type: 'comment', from: currentUser, postId }]);
  };

  return (
    <div className="feed">
      <h3>News Feed</h3>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="What's on your mind?" />
      <button onClick={handlePost}>Post</button>
      {posts.map(post => (
        <div key={post.id} className="post">
          <strong>{post.user}</strong>
          <p>{post.text}</p>
          <button onClick={() => handleLike(post.id)}>❤️ {post.likes.length}</button>
          <div className="comments">
            {post.comments.map((c, i) => (
              <p key={i}><strong>{c.user}</strong>: {c.text}</p>
            ))}
            <input
              type="text"
              placeholder="Comment..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleComment(post.id, e.target.value);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
