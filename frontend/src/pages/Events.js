import { json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

const EventsPage = () => {
  const data = useLoaderData();

  /* if (data.error) {
    return <p>{data.message}</p>;
  } */

  return <EventsList events={data.events} />;
};

export default EventsPage;

export const eventsLoader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    /* return {
      error: true,
      message: 'One or more events could not be fetched properly.',
    }; */

    /* throw new Response(JSON.stringify({ message: 'HTTP 500' }), {
      status: 500,
    }); */

    return json({ message: 'HTTP 500' }, { status: 500 });
  } else {
    return response;
  }
};
