import React, { useState, useEffect } from 'react';
import AppointmentForm from './components/AppointmentForm';
import CalendarView from './components/CalendarView';
import './styles.css';

const App = () => {
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem('appointments');
    return saved ? JSON.parse(saved) : [];
  });

  const bookedSlots = appointments.reduce((acc, curr) => {
    if (!acc[curr.date]) acc[curr.date] = [];
    acc[curr.date].push(curr.slot);
    return acc;
  }, {});

  const handleBook = (appointment) => {
    const updated = [...appointments, appointment];
    setAppointments(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h1 style={{ color: '#2196f3' }}>Booking System</h1>
      <AppointmentForm onBook={handleBook} bookedSlots={bookedSlots} />
      <CalendarView appointments={appointments} />
    </div>
  );
};

export default App;
