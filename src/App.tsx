import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider, Container } from 'react-bootstrap';

import { store } from '@store/store';
import Header from './components';
import HomePage from '@pages/home';
import Album from '@pages/album';
import Search from '@pages/search';

const App = () => {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
      <Container fluid>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/album" element={<Album />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          <ToastContainer />
        </Provider>
      </Container>
    </ThemeProvider>
  );
};

export default App;
