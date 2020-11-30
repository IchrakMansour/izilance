import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ViewRevendeurItem from './components/ViewRevendeurItem';

const RevendeursList = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Nicolas Gordon</h3>
      </Col>
    </Row>
    <Row>
      <ViewRevendeurItem />
    </Row>
  </Container>
);

export default RevendeursList;
