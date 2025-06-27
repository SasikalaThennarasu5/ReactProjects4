import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

const CourseList = () => {
  return (
    <div>
      <h2>Available Courses</h2>
      {courses.map((course) => {
        // Get progress from localStorage
        const saved = localStorage.getItem(`progress-${course.id}`);
        const completed = saved ? JSON.parse(saved).length : 0;
        const percent = (completed / course.lessons.length) * 100;

        return (
          <div key={course.id} className="card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div style={{ marginBottom: '0.5rem' }}>
              <small>Progress: {Math.round(percent)}%</small>
              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
            <Link to={`/course/${course.id}`}>
              <button>View Course</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CourseList;
