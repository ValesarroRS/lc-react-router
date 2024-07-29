import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root';
import { RouterError } from './components/RouterError';
import { Store } from './routes/store';
import { AboutUs } from './routes/about-us';
import { Terms } from './routes/terms';
import { PrivacyPolicy } from './routes/privacy-policy';
import { Index } from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <RouterError />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'store',
        element: <Store />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'contact-us',
        element: <Contact />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
