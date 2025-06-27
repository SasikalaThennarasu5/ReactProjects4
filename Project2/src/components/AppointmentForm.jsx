import React, { useState } from 'react';
import { timeSlots } from '../utils/timeSlots';

const AppointmentForm = ({ onBook, bookedSlots }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && slot) {
      onBook({ name, date, slot });
      setName('');
      setDate('');
      setSlot('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>Book Appointment</h3>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      <select value={slot} onChange={(e) => setSlot(e.target.value)} required>
        <option value="">Select Time</option>
        {timeSlots.map(time => (
          <option
            key={time}
            value={time}
            disabled={bookedSlots[date]?.includes(time)}
          >
            {time}
          </option>
        ))}
      </select>

      <button type="submit">Book Now</button>
    </form>
  );
};

export default AppointmentForm;
