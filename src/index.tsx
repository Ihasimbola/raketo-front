import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { router } from './routes/router';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);


