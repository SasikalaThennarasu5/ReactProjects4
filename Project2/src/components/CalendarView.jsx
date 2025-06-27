import React from 'react';

const CalendarView = ({ appointments }) => {
  return (
    <div className="card">
      <h3>Booked Appointments</h3>
      {appointments.length === 0 ? (
        <p>No appointments yet.</p>
      ) : (
        <ul>
          {appointments.map((a, i) => (
            <li key={i}>
              <strong>{a.date}</strong> @ {a.slot} — {a.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CalendarView;
