import { Outlet } from 'react-router-dom';
import EventNavigation from '../components/EventsNavigation';

const EventLayout = () => {
  return (
    <>
      <EventNavigation />
      <Outlet />
    </>
  );
};

export default EventLayout;
