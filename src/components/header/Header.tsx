import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/album">Album</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
