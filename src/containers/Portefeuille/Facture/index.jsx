import React from 'react';
import {Col, Container, Row, Badge} from 'reactstrap';
import Facture from './components/Facture';

const ViewCommande = () => (
    <Container>
        <Row>
            <Col md={12} >
            <div className="card__title">                                                         
                <h3 className="page-title">Mon portefeuille <strong>&gt; </strong> 123456789 <Badge color="primary p-2">En cours</Badge></h3>     
            </div>
            </Col>
        </Row>
        <Row>
            <Facture/>
        </Row>
    </Container>
);

export default ViewCommande;
