import { Link /* , useLoaderData */ } from 'react-router-dom';
import styles from './EventsList.module.css';

const EventsList = ({ events }) => {
  // const events = useLoaderData();

  return (
    <div className={styles.events}>
      <h1>All Events</h1>
      <ul className={styles.list}>
        {events.map((event) => (
          <li key={event.id} className={styles.item}>
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={styles.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsList;
