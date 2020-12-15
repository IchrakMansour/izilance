/* eslint-disable react/no-unused-state */
import React, {Component} from 'react';
import { Card, CardBody, Col} from 'reactstrap';
import PropTypes from 'prop-types';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import EditTable from '../../../../shared/components/table/EditableTable';
import Modal from '../../../../shared/components/Modal';

const Img1 = `https://previews.aspirity.com/easydev/img/for_store/vase.png`;
const Img2 = `https://previews.aspirity.com/easydev/img/for_store/vase_2.png`;
const Img3 = `https://previews.aspirity.com/easydev/img/for_store/vase_3.png`;
const Img4 = `https://previews.aspirity.com/easydev/img/for_store/fur.png`;
const Img5 = `https://previews.aspirity.com/easydev/img/for_store/pillow.png`;
const Img6 = `https://previews.aspirity.com/easydev/img/for_store/pillow_2.png`;
const Img7 = `https://previews.aspirity.com/easydev/img/for_store/pillow_dog.png`;

const PhotoFormatter = ({value}) => (
    <div className="products-list__img-wrap">
        <img src={value} alt=""/>
    </div>
);

PhotoFormatter.propTypes = {
    value: PropTypes.string.isRequired
};

const StatusFormatter = ({value}) => (value === 'Disponible'
    ? <span className="badge badge-success">Disponible</span>
    : <span className="badge badge-disabled">Indisponible</span>);

StatusFormatter.propTypes = {
    value: PropTypes.string.isRequired
};

export default class ProductsSellers extends Component {
    constructor() {
        super();
        this.heads = [
            {
                key: 'photo',
                name: '',
                formatter: PhotoFormatter,
                //width: 60
            }, {
                key: 'nom',
                name: 'Nom produit',
                sortable: true
            }, {
                key: 'prixFournisseur',
                name: 'Prix fournisseur',
                sortable: true
            }, {
                key: 'prixVente',
                name: 'Prix vente',
                sortable: true
            }, 
        ];

        this.state = {
            rows: this.createRows(55),
            pageOfItems: []
        };
    }

    onChangePage = (pageOfItems) => {
        this.setState({pageOfItems});
    };

    getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime() - start.getTime()))).toLocaleDateString();
    
    createRows = (numberOfRows) => {
        const rows = [];

        for (let i = 1; i < numberOfRows + 1; i += 1) {
            rows.push({
                photo: [
                    Img1,
                    Img2,
                    Img3,
                    Img4,
                    Img5,
                    Img6,
                    Img7
                ][Math.floor((Math.random() * 7))],
                nom: ['Glass Vase', 'Pillow'][Math.floor((Math.random() * 2))],
                prixFournisseur: Math.min(1000, (Math.random() * 1000) + 20).toFixed(2),
                prixVente: Math.min(1000, (Math.random() * 1000) + 20).toFixed(2),
            });
        }
        return rows;
    };
    onSorting = (sortColumn, sortDirection) => {
        const comparer = (a, b) => {
            if (sortDirection === 'ASC') {
                return a[sortColumn] > b[sortColumn]
                    ? 1
                    : -1;
            }
            return a[sortColumn] < b[sortColumn]
                ? 1
                : -1;
        };
        const {rows, pageOfItems, itemsToShow} = this.state;
        if (sortDirection !== 'NONE') {
            let sortRows = [...rows].sort(comparer);
            sortRows = this.filterRows(sortRows, pageOfItems, itemsToShow);
            this.setState({rowsToShow: sortRows});
            return sortRows;
        }
        const sortRows = this.filterRows(rows, pageOfItems, itemsToShow);
        this.setState({rowsToShow: sortRows});
        return sortRows;
    };

    render() {
        const {rows} = this.state;

        return (
            <Col md={12} lg={12} xl={12}>
                <Card>
                    <CardBody className="products-list__revendeur">
                        <div className="card__title">
                            <form className="form">
                                <div className="form__form-group products-list__search w-50">
                                    <input placeholder="Rechercher un produit ..." name="search"/>
                                    <MagnifyIcon/>
                                </div>
                            </form>
                        </div>
                        <EditTable onSorting={this.onSorting} heads={this.heads} rows={rows} sortable style={{width:'100% !important'}}/>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}
