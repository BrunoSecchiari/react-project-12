import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from 'react-router-dom';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const data = useActionData();
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      <Form method='post' className={styles.form}>
        <h1>{isLogin ? 'Log In' : 'Sing Up'}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' name='email' required />
        </p>
        <p>
          <label htmlFor='image'>Password</label>
          <input id='password' type='password' name='password' required />
        </p>
        <div className={styles.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Sing Up' : 'Log In'}
          </Link>
          <button disabled={isSubmitting}>Save</button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
