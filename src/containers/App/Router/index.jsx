import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainWrapper from '../MainWrapper';
import LogIn from '../../Account/LogIn/index';
import Register from '../../Account/Register/index';
import ResetPassword from '../../Account/ResetPassword/index';
import WrappedRoutes from './WrappedRoutes';

const Router = () => (
    <MainWrapper>
        <main>
            <Switch>
                {/* <Route path="/tableau_bord" component={Dashboard}/> */}
                <Route exact path="/" component={LogIn}/>
                <Route path="/register" component={Register}/>
                <Route path="/reset_password" component={ResetPassword}/>
                <Route exact path="/logout" component={LogIn}/>
                <Route path="/" component={WrappedRoutes}/>
            </Switch>
        </main>
    </MainWrapper>
);

export default Router;
