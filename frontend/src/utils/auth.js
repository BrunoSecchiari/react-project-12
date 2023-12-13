import { redirect } from 'react-router-dom';

export const getTokenDuration = () => {
  const expiration = localStorage.getItem('expiration');
  const expirationDate = new Date(expiration);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

export const getAuthToken = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect('/login');
  }

  return null;
};

/* export const tokenLoader = () => {
  return getAuthToken();
} */
