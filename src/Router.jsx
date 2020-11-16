import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './containers/Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from './containers/Account/LogIn/index';
import Register from './containers/Account/Register/index';
import ResetPassword from './containers/Account/ResetPassword'
import ExamplePageOne from './containers/Example/index';
import ExamplePageTwo from './containers/ExampleTwo/index';
import CreateProduct from './containers//Products/index';

const Pages = () => (
    <Switch>
        <Route path="/one" component={ExamplePageOne}/>
        <Route path="/two" component={ExamplePageTwo}/>
        <Route path="/createProduit" component={CreateProduct}/>
    </Switch>
);

const wrappedRoutes = () => (
    <div>
        <Layout/>
        <div className="container__wrap">
            <Route path="/" component={Pages}/>
        </div>
    </div>
);

const Router = () => (
    <MainWrapper>
        <main>
            <Switch>
                <Route exact path="/" component={LogIn}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/reset_password" component={ResetPassword}/>
                <Route path="/" component={wrappedRoutes}/>
                {/* <Route path="/createProduit" component={CreateProduct} /> */}
            </Switch>
        </main>
    </MainWrapper>
);

export default Router;
