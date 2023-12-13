import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage, { loginAction } from './pages/Login';
import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  deleteEventAction,
  eventDetailLoader,
} from './pages/EventDetail';
import EventLayout from './pages/EventLayout';
import EventsPage, { eventsLoader } from './pages/Events';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import NewsletterPage, { newsletterAction } from './pages/Newsletter';
import RootLayout from './pages/RootLayout';

import { eventAction } from './utils/actions';
import { checkAuthLoader, getAuthToken } from './utils/auth';
import { logoutAction } from './pages/Logout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: () => getAuthToken(),
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':id',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: eventAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: eventAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: 'login',
        element: <LoginPage />,
        action: loginAction,
      },
      { path: 'logout', action: logoutAction },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
