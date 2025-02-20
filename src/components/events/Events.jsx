import './events.css'
import image2 from '../../assets/2.jpg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const EventCard = (props) => {
  const { title, description, date, location, image } = props;

  return (
    <div className='event'>
      {/* Display event details */}
      <h3 className='event-title'>{title}</h3>
      <img className='event-image' src={image} alt='Event' />
      <p>Date: {date}</p>
      <p>Location: {location}</p>
      {/* <p>{description}</p> */}


    </div>
  );
};
const Events = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchEvents();
  }, []);
  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/events',
        {
          method: 'GET',
        }
      );
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
        console.log("this is data" + data);
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="events">
      <div className='upcoming-heading'>
        <h2>
          Upcoming Events
        </h2>
        <button onClick={()=>navigate('/events/create')} className='create-event-button'>
          Create Event
        </button>
      </div>

      <div className="upcoming">
        {events
          .filter(event => event.upcoming) // Filter events with upcoming=true
          .map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              date={event.date}
              location={event.location}
              image={image2} // You can update this to use the event-specific image if available
            />
          ))}
        {/* <EventCard title="Event Title" description="Event Description" date="Event Date" location="Event Location" image={image2} />
        <EventCard title="Event Title" description="Event Description" date="Event Date" location="Event Location" image={image2} />
        <EventCard title="Event Title" description="Event Description" date="Event Date" location="Event Location" image={image2} />
        <EventCard title="Event Title" description="Event Description" date="Event Date" location="Event Location" image={image2} /> */}
      </div>
      <h2>Past Events</h2>

      <div className="upcoming">
        {events
          .filter(event => !event.upcoming && event.title) // Filter events with upcoming=true
          .map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              date={event.date}
              location={event.location}
              image={image2} // You can update this to use the event-specific image if available
            />
          ))}
        {/* <EventCard title="Event Title" description="Event Description" date="Event Date" location="Event Location" image={image2} />
        <EventCard title="Event Title" description="Event Description" date="Event Date" location="Event Location" image={image2} />
        <EventCard title="Event Title" description="Event Description" date="Event Date" location="Event Location" image={image2} />
        <EventCard title="Event Title" description="Event Description" date="Event Date" location="Event Location" image={image2} /> */}
      </div>
    </div>
  )
}
export default Events;