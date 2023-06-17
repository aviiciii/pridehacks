import React, { useState } from 'react';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation or further processing here
    // You can send the form data to the server or update the state in a parent component
    // Example: axios.post('/api/events', { title, description, date, location })
  };

  return (
    <div className="create-event">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateEvent;
