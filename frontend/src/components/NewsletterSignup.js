import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import styles from './NewsletterSignup.module.css';

const NewsletterSignup = () => {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method='post'
      action='/newsletter'
      className={styles.newsletter}
    >
      <input type='email' />
      <button>Newsletter Sign Up</button>
    </fetcher.Form>
  );
};

export default NewsletterSignup;
