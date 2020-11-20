import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import CreateProductForm from './CreateProductForm';

const CreateProductCard = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Main Information</h5>
        </div>
        <CreateProductForm onSubmit />
      </CardBody>
    </Card>
  </Col>
);

export default CreateProductCard;
