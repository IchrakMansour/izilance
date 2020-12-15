import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import ViewRevendeurItem from './components/ViewRevendeurItem';
import Stats from './components/Stats';
import ProductsSellers from './components/ProductsSellers';

const ViewRevendeur = () => (
    <Container>
        <Row>
            <Col md={12} xl={12} lg={12}>
                <h3 className="page-title p-3">Mes revendeurs <strong>&gt; </strong> Nicholas Gordon</h3>
            </Col>
        </Row>
        <div className="d-flex flex-row" style={{height:'auto'}}>
            <div className="flex-col justify-content-start">
                <ViewRevendeurItem/>
                <Stats/>
            </div>
            <div className="col justify-content-end">
                <ProductsSellers/>
            </div>
        </div>
    </Container>
);

export default ViewRevendeur;
