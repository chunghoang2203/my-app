import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './global/global.css'
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import routerApp from './utils/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerApp}>

    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
