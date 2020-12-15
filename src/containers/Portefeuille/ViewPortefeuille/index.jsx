import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardBody, Col, ButtonToolbar, Container, Row, } from 'reactstrap';
import Portefeuille from './components/Portefeuille';

const ViewPortefeuille = () => (
    <Container>
        <Row>
            <Col md={12}>
                <h3 className="page-title pb-5">Mon portefeuille</h3>
                <ButtonToolbar className="products-list__btn-toolbar-top search">
                    <Link className="btn btn-primary products-list__btn-add">Retirer mes argents</Link>
                </ButtonToolbar>
            </Col>
            <Col md={12} xl={3} lg={6} xs={12}>
                <Card>
                    <CardBody className="dashboard__booking-card">
                        <div className="dashboard__booking-total-container">
                            <h2 className="dashboard__booking-total-title dashboard__booking-total-title"><strong>15</strong></h2>
                        </div>
                        <h5 className="dashboard__booking-total-description">Nombre de commandes</h5>
                    </CardBody>
                </Card>
            </Col>
            <Col md={12} xl={3} lg={6} xs={12}>
                <Card>
                    <CardBody className="dashboard__booking-card">
                        <div className="dashboard__booking-total-container">
                            <h2 className="dashboard__booking-total-title dashboard__booking-total-title"><strong>1150</strong><sup>TND</sup></h2>
                        </div>
                        <h5 className="dashboard__booking-total-description">Total vente</h5>
                    </CardBody>
                </Card>
            </Col>
            <Col md={12} xl={3} lg={6} xs={12}>
                <Card>
                    <CardBody className="dashboard__booking-card">
                        <div className="dashboard__booking-total-container">
                            <h2 className="dashboard__booking-total-title dashboard__booking-total-title"><strong>150</strong><sup>TND</sup></h2>
                        </div>
                        <h5 className="dashboard__booking-total-description">Solde</h5>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row>
            <Portefeuille/>
        </Row>
    </Container>
);

export default ViewPortefeuille;
