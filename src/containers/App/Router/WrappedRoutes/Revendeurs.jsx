import React from 'react';
import {Route, Switch} from 'react-router-dom';
import RevendeursList from '../../../Revendeurs/RevendeursList/index';
import ViewRevendeur from '../../../Revendeurs/ViewRevendeur/index';

export default() => (
    <Switch>
        <Route exact path="/revendeurs" component={RevendeursList}/>
        <Route path="/revendeurs/liste" component={RevendeursList}/>
        <Route path="/revendeurs/:id" component={ViewRevendeur}/>
    </Switch>
);
