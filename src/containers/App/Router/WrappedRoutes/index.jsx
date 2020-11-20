import React from 'react';
import {Route} from 'react-router-dom';
import Layout from '../../../Layout/index';
import Commandes from './Commandes';
import Commerce from './Commerce';
import Stock from './Stock';

export default() => (
    <div>
        <Layout/>
        <div className="container__wrap">
            <Route path="/tableau_bord" component={Commerce}/>
            <Route path="/stock" component={Stock}/>
            <Route path="/commandes" component={Commandes}/>
        </div>
    </div>
);