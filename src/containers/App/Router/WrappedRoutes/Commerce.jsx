import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ECommerceDashboard from '../../../Dashboards/ECommerce/index';
import ECommerceDashboardEdit from '../../../Dashboards/ECommerceTableEdit/index';

export default () => (
  <Switch>
    <Route exact path="/tableau_bord" component={ECommerceDashboard} />
    <Route path="/tableau_bord/edit/:index" component={ECommerceDashboardEdit} />
  </Switch>
);
