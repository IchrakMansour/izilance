import React, {Component} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import CartOutlineIcon from 'mdi-react/CartOutlineIcon';
import ArrowUpThickIcon from 'mdi-react/ArrowUpThickIcon';
import CashIcon from 'mdi-react/CashIcon';
import CashMultipleIcon from 'mdi-react/CashMultipleIcon';

class Stats extends Component {
    render() {
        return (
            <Col md={12} lg={12} xl={12}>
                <Card>
                    <CardBody className="profile__card">
                        <div className="card__title p-2">
                            <h4 className="bold-text">Stats</h4>
                        </div>
                        <div className="profile__data">
                            <div className="row">
                                <CartOutlineIcon size="4em" color="#2196F3"/>
                                <p className="profile__name pl-3" style={{fontSize:'1.1rem'}}>420 <ArrowUpThickIcon size="1rem" color="green"/></p>
                                <p className="statName">Produit</p>
                            </div>
                            <div className="row">
                                <CashIcon size="4em" color="orange"/>
                                <p className="profile__name pl-3"><label style={{fontSize:'1.1rem'}}>120 </label><sup> TND</sup> <ArrowUpThickIcon size="1rem" color="green"/></p>
                                <p className="statName statName__budget">Total Budget</p>
                            </div>
                            <div className="row">
                                <CashMultipleIcon size="4em" color="green"/>
                                <p className="profile__name pl-3" style={{fontSize:'1.1rem'}}>$64.200 <ArrowUpThickIcon size="1rem" color="green"/></p>
                                <p className="statName statName__funds">Funds spends</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Stats;