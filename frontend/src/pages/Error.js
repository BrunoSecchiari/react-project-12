import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent';

const ErrorPage = () => {
  const error = useRouteError();
  let message = 'HTTP Error';

  if (error.status === 404) {
    message = 'HTTP 404';
  }

  if (error.status === 500) {
    message = error.data.message;
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={message} />
    </>
  );
};

export default ErrorPage;
