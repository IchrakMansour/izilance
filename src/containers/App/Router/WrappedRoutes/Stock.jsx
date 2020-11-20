import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsList from '../../../MonStock/ProductsList/index';
import CreateProduct from '../../../MonStock/CreateProduct/index';

export default () => (
  <Switch>
    <Route exact path="/stock" component={ProductsList} />
    <Route path="/stock/products_list" component={ProductsList} />
    <Route path="/stock/create_product" component={CreateProduct} />
  </Switch>
);
