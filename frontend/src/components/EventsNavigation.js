import { NavLink, useRouteLoaderData } from 'react-router-dom';
import styles from './EventsNavigation.module.css';

const EventsNavigation = () => {
  const token = useRouteLoaderData('root');

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to='/events'
              className={({ isActive }) => isActive && styles.active}
              end
            >
              All Events
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink
                to='/events/new'
                className={({ isActive }) => isActive && styles.active}
              >
                New Event
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default EventsNavigation;
