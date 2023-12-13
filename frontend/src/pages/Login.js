import { json, redirect } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;

export const loginAction = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'HTTP 422' }, { status: 422 });
  }

  const data = await request.formData();
  const authenticationData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(authenticationData),
  });

  if (response.status === 401 || response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'HTTP 500' }, { status: 500 });
  }

  const responseData = await response.json();
  const token = responseData.token;
  localStorage.setItem('token', token);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/');
};
