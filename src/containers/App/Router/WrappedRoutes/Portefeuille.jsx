import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Portefeuille from '../../../Portefeuille/ViewPortefeuille/index';
import Facture from '../../../Portefeuille/Facture/index'

export default() => (
    <Switch>
        <Route exact path="/portefeuille" component={Portefeuille}/>
        <Route path="/portefeuille/facture/:id" component={Facture}/>
    </Switch>
);
