import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

export const Search = () => {
  return (
    <Container>
      <Row className="p-3">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formSearchText">
            <Form.Label column sm="2">
              Search
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="search string here" />
            </Col>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
};
