import React from 'react';
import {Col, Container, Row, } from 'reactstrap';
import ViewNotifications from './components/ViewNotifications';

const Notifications = () => (
    <Container>
        <Row>
            <Col md={12}>
                <h3 className="page-title pb-5">Notifications</h3>
            </Col>
        </Row>
        <Row>
            <ViewNotifications/>
        </Row>
    </Container>
);

export default Notifications;
