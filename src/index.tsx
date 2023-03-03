import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootApp = ReactDOM.createRoot(
  document.getElementById('appRoot') as HTMLElement
);

rootApp.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
