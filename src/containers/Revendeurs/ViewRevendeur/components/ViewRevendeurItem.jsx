import React, { Component } from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import FacebookIcon from 'mdi-react/FacebookIcon';
import InstagramIcon from 'mdi-react/InstagramIcon';

class ViewRevendeurItem extends Component {
    render() {
        return (
            <Col md={12} lg={12} xl={12}>
                <Card>
                    <CardBody className="profile__card">
                        <div className="profile__avatar p-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4b8lTxKzkRKsS4G2HuGTIFRRWW_u2nco-bQ&usqp=CAU" alt="revendeur" />
                        </div>
                        <div className="profile__data">
                            <p className="profile__name">Nicholas Gordon</p>
                            <p className="profile__work">UI/UX designer</p>
                            <p className="profile__work"><FacebookIcon/> Qualité prix raisonnable</p>
                            <p className="profile__work"><InstagramIcon/> Qualité prix raisonnable</p>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default ViewRevendeurItem;