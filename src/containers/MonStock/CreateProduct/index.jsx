import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import CreateProductCard from './components/CreateProductCard';

const CreateProduct = () => (
    <Container>
        <Row>
            <Col md={12}>
                {window.location.pathname === '/stock/creer_produit'
                    ? <h3 className="page-title">Ajouter Produit</h3>
                    : <h3 className="page-title">Modifier le produit "nom"</h3>}
            </Col>
        </Row>
        <Row>
            <CreateProductCard/>
        </Row>
    </Container>
);

export default CreateProduct;
