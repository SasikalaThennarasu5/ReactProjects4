import React from 'react';

const LessonPlayer = ({ lesson, onComplete, isCompleted }) => {
  return (
    <div className="video-container">
      <h3>{lesson.title}</h3>
      <video width="100%" controls onEnded={onComplete}>
        <source src={lesson.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isCompleted && <p style={{ color: '#4caf50', fontWeight: 'bold' }}>✅ Lesson completed</p>}
    </div>
  );
};

export default LessonPlayer;
