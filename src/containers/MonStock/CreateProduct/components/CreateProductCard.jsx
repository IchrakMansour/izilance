import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import CreateProductForm from './CreateProductForm';

const CreateProductCard = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <CreateProductForm onSubmit />
      </CardBody>
    </Card>
  </Col>
);

export default CreateProductCard;
