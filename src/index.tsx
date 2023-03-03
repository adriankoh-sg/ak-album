import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootApp = ReactDOM.createRoot(
  document.getElementById('appRoot') as HTMLElement
);

rootApp.render(<App initValue={42} />);
