import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Notifications from '../../../Notifications/index';

export default () => (
  <Switch>
    <Route exact path="/notifications" component={Notifications} />
    <Route path="/notifications/view" component={Notifications} />
  </Switch>
);
