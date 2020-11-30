import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ProductsListTable from './components/ProductsListTable';

const ProductsList = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Liste des produits</h3>
      </Col>
    </Row>
    <Row>
      <ProductsListTable />
    </Row>
  </Container>
);

export default ProductsList;
