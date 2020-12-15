import React from 'react';
import {Link} from 'react-router-dom';
import { Col,  ButtonToolbar, Container, Row, } from 'reactstrap';
import EditProfil from './components/EditProfil';

const Notifications = () => (
    <Container>
        <Row>
            <Col md={12}>
                <h3 className="page-title pb-5">Profil</h3>
                <ButtonToolbar className="products-list__btn-toolbar-top search pr-3">
                    <Link className="btn btn-primary products-list__btn-add">Enregistrer</Link>
                </ButtonToolbar>
            </Col>
        </Row>
        <Row>
            <EditProfil/>
        </Row>
    </Container>
);

export default Notifications;
