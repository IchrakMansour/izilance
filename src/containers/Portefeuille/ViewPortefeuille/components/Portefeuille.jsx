import React, { Component } from 'react';
import {Card, CardBody, Col, Badge, ButtonToolbar, ButtonGroup, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
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
    value === 'Termine'  && <Badge color="success">Terminé</Badge> ||
    value === 'Annule'  && <Badge color="danger">Annulé</Badge> 
);

StatusFormatter.propTypes = {
    value: PropTypes.string.isRequired
};


class ViewPortefeuille extends Component {
    constructor() {
        super();
        this.heads = [
            {
                key: 'statut',
                name: 'Statut',
                formatter: StatusFormatter,
                sortable: true,
            }, {
                key: 'facture',
                name: 'Facture',
                sortable: true,
            }, {
                key: 'montant',
                name: 'Montant',
                sortable: true,
                formatter: MoneyFormatter,
            }, {
                key: 'date',
                name: 'Date',
                sortable: true,
            }, {
                key: 'actions',
                name: '', 
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
                statut: ['enCours', 'Termine', 'Annule'][Math.floor((Math.random() * 3))],
                facture: '123456789',
                montant: Math.min(1000, (Math.random() * 1000) + 20).toFixed(2),
                date: this.getRandomDate(new Date(2017, 3, 1), new Date(2018, 3, 1)),
                actions: <ButtonToolbar>
                            <ButtonGroup className="btn-group--icons pt-2" dir="ltr">
                                <Button outline><Link to='/portefeuille/facture/123456789'><span className="lnr lnr-eye"/></Link></Button>
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
                            <ButtonToolbar >
                                <Badge color="light p-2">Terminé</Badge> 
                                <Badge color="light p-2">En cours</Badge> 
                                <Badge color="light p-2">Annulé</Badge> 
                            </ButtonToolbar>
                        </div>
                        <EditTable heads={this.heads} rows={rows}/>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default ViewPortefeuille;