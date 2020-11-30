import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {CardBody} from 'reactstrap';
import FacebookIcon from 'mdi-react/FacebookIcon';
import InstagramIcon from 'mdi-react/InstagramIcon';
import DotsHorizontalIcon from 'mdi-react/DotsHorizontalIcon';
const CatalogRevendeur = ({items}) => (
    <div className="catalog-items__wrap">
        <div className="catalog-items">
            {items.map(item => (
                <CardBody className="catalog-item" key={item.i}>
                    <Link className="catalog-item__link" to="/revendeurs/1">
                        <div className="d-flex justify-content-end align-items-start"><DotsHorizontalIcon/></div>
                        <div className="catalog-item__img-wrap">
                            <img className="catalog-item__img" src={item.src} alt="catalog-item-img"/>
                        </div>
                        <div className="catalog-item__info">
                            <h4 className="catalog-item__title">{item.name}</h4>
                            <p className="catalog-item__description"><FacebookIcon/>{item.fcbAccount}</p>
                            <p className="catalog-item__description"><InstagramIcon/>{item.instaAccount}</p>
                        </div>
                    </Link>
                </CardBody>
            ))}
        </div>
    </div>
);

CatalogRevendeur.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
        name: PropTypes.string,
        fcbAccount: PropTypes.string,
        instaAccount: PropTypes.string,
    }))
};

CatalogRevendeur.defaultProps = {
    items: []
};

export default CatalogRevendeur;
