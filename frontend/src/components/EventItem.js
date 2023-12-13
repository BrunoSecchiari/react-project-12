import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';
import styles from './EventItem.module.css';

const EventItem = ({ event }) => {
  const token = useRouteLoaderData('root');

  const submit = useSubmit();

  const deleteHandler = () => {
    const proceed = window.confirm('Are you sure you want to proceed?');

    if (proceed) {
      submit(null, { method: 'DELETE' });
    }
  };

  return (
    <article className={styles.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {token && (
        <menu className={styles.actions}>
          <Link to='edit'>Edit</Link>
          <button onClick={deleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
};

export default EventItem;
