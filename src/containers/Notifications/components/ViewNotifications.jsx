import React, {Component} from 'react';
import {Card, CardBody, ButtonToolbar, Badge} from 'reactstrap';

class ViewNotifications extends Component {
    render() {
        return (
            <Card>
                <div className="card__title">
                    <ButtonToolbar >
                        <Badge color="light p-2">Commandes</Badge> 
                        <Badge color="light p-2">Stock</Badge> 
                        <Badge color="light p-2">Revendeurs</Badge> 
                        <Badge color="light p-2">Portefeuille</Badge> 
                    </ButtonToolbar>
                </div>
                <Card>
                    <CardBody className="todo__item">
                        <div className="todo__info">
                            <div className="todo__header">
                                <div className="row">
                                    <div className="col d-flex justify-content-center">
                                        <span className="lnr lnr-cart" style={{fontSize:'3rem'}}/>
                                    </div>
                                    <div className="col-8">
                                        <div className="todo__content">
                                            <div className="todo__description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="todo__additional d-flex justify-content-center ">
                                            <p className="todo__due-date align-items-center">Il y a 2 jours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="todo__item">
                        <div className="todo__info">
                            <div className="todo__header">
                                <div className="row">
                                    <div className="col d-flex justify-content-center">
                                        <span className="lnr lnr-store" style={{fontSize:'3rem'}}/>
                                    </div>
                                    <div className="col-8">
                                        <div className="todo__content">
                                            <div className="todo__description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="todo__additional d-flex justify-content-center ">
                                            <p className="todo__due-date align-items-center">Il y a 2 jours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="todo__item">
                        <div className="todo__info">
                            <div className="todo__header">
                                <div className="row">
                                    <div className="col d-flex justify-content-center">
                                        <span className="lnr lnr-users" style={{fontSize:'3rem'}}/>
                                    </div>
                                    <div className="col-8">
                                        <div className="todo__content">
                                            <div className="todo__description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="todo__additional d-flex justify-content-center ">
                                            <p className="todo__due-date align-items-center">Il y a 2 jours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="todo__item">
                        <div className="todo__info">
                            <div className="todo__header">
                                <div className="row">
                                    <div className="col d-flex justify-content-center">
                                        <span className="lnr lnr-briefcase" style={{fontSize:'3rem'}}/>
                                    </div>
                                    <div className="col-8">
                                        <div className="todo__content">
                                            <div className="todo__description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="todo__additional d-flex justify-content-center ">
                                            <p className="todo__due-date align-items-center">Il y a 2 jours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Card>
        );
    }
}
export default ViewNotifications;
