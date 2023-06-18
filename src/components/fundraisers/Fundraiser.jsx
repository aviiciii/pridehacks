import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image2 from '../../assets/2.jpg';
import './fundraiser.css';
const FundraiserCard = (props) => {
    const { title, description, date, location, image } = props;
  
    return (
      <div className='event'>
        {/* Display event details */}
        <h3 className='event-title'>{title}</h3>
        <img className='event-image' src={image} alt='Event' />
        <p> {description}</p>
        <button className="create-fundraiser-button create-event-button">Donate Now</button>
        {/* <p>{description}</p> */}
  
  
      </div>
    );
  };
  const Fundraisers = () => {
    const [fundraisers , setFundraisers ] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      fetchFundraisers ();
    }, []);
    const fetchFundraisers  = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/fundraisers',
          {
            method: 'GET',
          }
        );
        if (response.ok) {
          const data = await response.json();
          setFundraisers (data);
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
            Help your community by donating to these fundraisers!
          </h2>
          <button onClick={()=>navigate('/fundraisers/create')} className='create-event-button'>
            Create 
          </button>
        </div>
  
        <div className="upcoming">
          {fundraisers
            .map((event, index) => (
              <FundraiserCard
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
  export default Fundraisers;