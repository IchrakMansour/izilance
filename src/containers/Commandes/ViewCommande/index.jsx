import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row, Badge, ButtonToolbar} from 'reactstrap';
import Commande from './components/Commande';

const ViewCommande = () => (
    <Container>
        <Row>
            <Col md={12} >
            <div className="card__title">                                                         
                <h3 className="page-title">Mes Commandes <strong>&gt; </strong> 123456789 <Badge color="primary p-2">En cours</Badge></h3>                            
                <ButtonToolbar className="products-list__btn-toolbar-top search">
                    <Link className="btn btn-secondary products-list__btn-add">Annuler la commande</Link>
                    <Link className="btn btn-primary products-list__btn-add">Livrer la commande</Link>
                </ButtonToolbar>
            </div>
            </Col>
        </Row>
        <Row>
            <Commande/>
        </Row>
    </Container>
);

export default ViewCommande;
