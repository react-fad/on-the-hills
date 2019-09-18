import React from 'react';
import { Global, css } from '@emotion/core';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = ({ children }) => {
  return (
    <footer className="py-5 bg-dark">
      <Container fluid={false}>
        <Row>
          <Col>Site map</Col>
          <Col>Info point</Col>
          <Col>Other info</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Layout;
