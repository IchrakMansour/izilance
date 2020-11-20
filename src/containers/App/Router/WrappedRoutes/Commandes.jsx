import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListeCommandes from '../../../Commandes/OrdersList/index';

export default () => (
  <Switch>
    <Route exact path="/commandes" component={ListeCommandes} />
    <Route path="/commandes/liste_commandes" component={ListeCommandes} />
  </Switch>
);
