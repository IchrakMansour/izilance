import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ProductsList from '../../../MonStock/ProductsList/index';
import CreateProduct from '../../../MonStock/CreateProduct/index';

export default() => (
    <Switch>
        <Route exact path="/stock" component={ProductsList}/>
        <Route path="/stock/liste_produits" component={ProductsList}/>
        <Route path="/stock/creer_produit" component={CreateProduct}/>
        <Route path="/stock/modifier_produit/:id" component={CreateProduct}/>
    </Switch>
);
