import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseList from './components/CourseList'; // default import ✅
import CourseDetail from './components/CourseDetail';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 style={{ color: '#2196f3' }}>Learning Management System</h1>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
