import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '@store/store';
import Header from './components';
import HomePage from '@pages/home';
import Album from '@pages/album';

const App = () => {
  return (
    <div className="container-fluid">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/album" element={<Album />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
