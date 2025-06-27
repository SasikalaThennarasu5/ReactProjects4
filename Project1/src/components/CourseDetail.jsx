import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../data/courses';
import LessonPlayer from './LessonPlayer';
import Quiz from './Quiz';
import ProgressBar from './ProgressBar';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem(`progress-${id}`);
    return saved ? JSON.parse(saved) : [];
  });

  const markComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      const updated = [...completedLessons, lessonId];
      setCompletedLessons(updated);
      localStorage.setItem(`progress-${id}`, JSON.stringify(updated));
    }
  };

  const progressPercent = (completedLessons.length / course.lessons.length) * 100;

  return (
    <div>
      <h2>{course.title}</h2>
      <ProgressBar progress={progressPercent} />

      <LessonPlayer
        lesson={course.lessons[currentLesson]}
        onComplete={() => markComplete(course.lessons[currentLesson].id)}
        isCompleted={completedLessons.includes(course.lessons[currentLesson].id)}
      />

      <div className="my-3">
        {course.lessons.map((lesson, index) => (
          <button
            key={lesson.id}
            onClick={() => setCurrentLesson(index)}
            style={{
              margin: '0.3rem',
              backgroundColor: completedLessons.includes(lesson.id) ? '#d4edda' : '#f8d7da',
            }}
          >
            {lesson.title}
          </button>
        ))}
      </div>

      <Quiz questions={course.quiz} />
    </div>
  );
};

export default CourseDetail;
