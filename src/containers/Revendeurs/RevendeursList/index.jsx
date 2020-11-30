import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CatalogItems from './components/CatalogItems';

const RevendeursList = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Liste de revendeurs</h3>
      </Col>
    </Row>
    <Row>
      <CatalogItems />
    </Row>
  </Container>
);

export default RevendeursList;
