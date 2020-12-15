import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import OrdersListTable from './components/OrdersListTable';

const Commandes = () => (
    <Container>
        <Row>
            <Col md={12}>
                <h3 className="page-title">Mes Commandes</h3>
            </Col>
        </Row>
        <Row>
            <OrdersListTable/>
        </Row>
    </Container>
);

export default Commandes;
