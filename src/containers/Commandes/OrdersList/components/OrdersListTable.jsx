/* eslint-disable react/no-unused-state */
import React, {Component} from 'react';
import {Card, CardBody, Col, Badge, ButtonToolbar, ButtonGroup, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import EditTable from '../../../../shared/components/table/EditableTable';

const MoneyFormatter = ({value}) => (
    <div>
        {value}
    </div>
);

MoneyFormatter.propTypes = {
    value: PropTypes.string.isRequired
};

const StatusFormatter = ({value}) => (
    value === 'enCours' && <Badge color="primary">En cours</Badge> ||
    value === 'Livre'  && <Badge color="success">Livré</Badge> ||
    value === 'Annule'  && <Badge color="danger">Annulé</Badge> ||
    value === 'enPreparation'  && <Badge color="warning">En préparation</Badge> 
);

StatusFormatter.propTypes = {
    value: PropTypes.string.isRequired
};

export default class OrdersListTable extends Component {
    constructor() {
        super();
        this.heads = [
            {
                key: 'statut',
                name: 'Statut',
                formatter: StatusFormatter,
                sortable: true,
                width:150
            }, {
                key: 'commande',
                name: 'Commande',
                sortable: true,
                width:150
            }, {
                key: 'nbr_produit',
                name: 'Nombre produit',
                sortable: true,
                width:150
            }, {
                key: 'prix',
                name: 'Prix',
                sortable: true,
                formatter: MoneyFormatter,
                width:150
            }, {
                key: 'date',
                name: 'Date',
                sortable: true,
                width:150
            }, {
                key: 'adresse',
                name: 'Adresse',
                sortable: true,
                formatter: MoneyFormatter,
                width:700
            }, {
                key: 'actions',
                name: '', 
                width:100
            }
        ];

        this.state = {
            rows: this.createRows(17),
            pageOfItems: []
        };
    }
    
    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({pageOfItems});
    };

    getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime() - start.getTime()))).toLocaleDateString();

    createRows = (numberOfRows) => {
        const rows = [];

        for (let i = 1; i < numberOfRows + 1; i += 1) {
            rows.push({
                statut: ['enCours', 'Livre', 'Annule', 'enPreparation'][Math.floor((Math.random() * 4))],
                commande: '123456789',
                nbr_produit: Math.min(400, Math.round(Math.random() * 400)),
                prix: Math.min(1000, (Math.random() * 1000) + 20).toFixed(2),
                date: this.getRandomDate(new Date(2017, 3, 1), new Date(2018, 3, 1)),
                adresse: 'Excitavit hic ardor milites per municipia plurima, quae isdem conterminant, dispositos et castella',
                actions: <ButtonToolbar>
                            <ButtonGroup className="btn-group--icons pt-2" dir="ltr">
                                <Button outline><Link to='/commandes/voir_commande/123456789'><span className="lnr lnr-eye"/></Link></Button>
                                <Button outline ><span className="lnr lnr-printer" /></Button>
                            </ButtonGroup>
                        </ButtonToolbar>
            });
        }
        return rows;
    };

    render() {
        const {rows} = this.state;
        return (
            <Col md={12} lg={12}>
                <Card>
                    <CardBody className="products-list">
                        <div className="card__title">
                            <form className="form">
                                <div className="form__form-group products-list__search w-50">
                                    <input placeholder="Rechercher une commande ..." name="search"/>
                                    <MagnifyIcon/>
                                </div>
                            </form>
                            <ButtonToolbar className="products-list__btn-toolbar-top search ">
                                <Badge color="light p-2">En cours</Badge> 
                                <Badge color="light p-2">Livré</Badge> 
                                <Badge color="light p-2">Annulé</Badge> 
                                <Badge color="light p-2">En préparation</Badge> 
                            </ButtonToolbar>
                        </div>
                        <EditTable heads={this.heads} rows={rows}/>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}
