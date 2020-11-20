import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import BasicCard from './components/BasicCard';
import RecentOrders from './components/RecentOrders';
import {deleteNewOrderTableData} from '../../../redux/actions/newOrderTableActions';

const ECommerceDashboard = ({t, dispatch}) => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">{t('dashboard_commerce.page_title')}</h3>
            </Col>
        </Row>
        <Row>
            <RecentOrders/>
        </Row>
    </Container>
);

ECommerceDashboard.propTypes = {
    dispatch: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
};

export default connect(state => ({rtl: state.rtl}))(withTranslation('common')(ECommerceDashboard));
