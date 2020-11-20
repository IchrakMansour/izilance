import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CreateProductCard from './components/CreateProductCard';

const CreateProduct = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Add Product</h3>
      </Col>
    </Row>
    <Row>
      <CreateProductCard />
    </Row>
  </Container>
);

export default CreateProduct;
