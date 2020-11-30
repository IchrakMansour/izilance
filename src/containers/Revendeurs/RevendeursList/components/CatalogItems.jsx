import React from 'react';
import {Col} from 'reactstrap';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import RevendeurItems from '../../../../shared/components/catalog/RevendeurItems';
import catalogList from './catalog_list';

const CatalogItems = () => (
    <Col md={12} lg={12}>
        <form className="form">
            <div className="form__form-group revendeurs-list__search w-50">
                <input placeholder="Rechercher un revendeur ..." name="search"/>
                <MagnifyIcon/>
            </div>
        </form>
        <RevendeurItems items={catalogList}/>
    </Col>
);

export default CatalogItems;
