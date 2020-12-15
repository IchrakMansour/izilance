/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
    Card,
    Col,
    Button,
    ButtonToolbar,
    Table,
    CardBody
} from 'reactstrap';

const invoiceData = [
    {
        img: 'https://previews.aspirity.com/easydev/img/for_store/pillow_dog.png',
        nomProduit: 'Wordpress Plugin Apollo 200',
        quantite: 1,
        prix: 27
    }, {
        img: 'https://previews.aspirity.com/easydev/img/for_store/pillow_dog.png',
        nomProduit: 'Easy Pro Admin Template',
        quantite: 1,
        prix: 59
    }, {
        img: 'https://previews.aspirity.com/easydev/img/for_store/pillow_dog.png',
        nomProduit: 'Spirit HTML Template',
        quantite: 2,
        prix: 20
    }
];

const Commande = () => (
    <Col md={12} lg={12}>
        <Card>
            <CardBody className="invoice">
                <div className="invoice__head">
                    <div className="invoice__head-left">
                        {/* <div className="invoice__logo"/> */}
                        <p className="invoice__date">14 Décembre, 2020</p>
                        <p>Bon de commande n° 123456789</p>
                        <p>Num client, 123</p>
                        <p>Le revendeur, Foulen Ben Foulen</p>
                    </div>
                    <div className="invoice__head-right">
                        <h4>Commande #123456789</h4>
                        <p>Foulena Bent Foulen</p>
                        <p>Avenue Hedi Chaker, n14,</p>
                        <p>Bennane 5025, Monastir, Tunisie</p>
                    </div>
                </div>
                <Table className="table--bordered" responsive>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nom du produit</th>
                            <th>Quantité</th>
                            <th>Prix</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoiceData.map((i, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="products-list__img-wrap"><img src={i.img} alt=""/></div>
                                </td>
                                <td>{i.nomProduit}</td>
                                <td>{i.quantite}</td>
                                <td>{i.prix}</td>
                                <td>{i.quantite * i.prix}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="invoice__total">
                    <h3>
                        <strong>Total</strong>
                        : 150TND</h3>
                </div>
            </CardBody>
        </Card>
    </Col>
);

export default Commande;
