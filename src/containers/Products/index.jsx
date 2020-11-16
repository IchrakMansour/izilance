import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CreateProducts from './components/CreateProducts';

const ProductsPage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Creation du produit ya Fawzyyyy</h3>
      </Col>
    </Row>
    <Row>
      <CreateProducts />
    </Row>
  </Container>
);

export default ProductsPage;
