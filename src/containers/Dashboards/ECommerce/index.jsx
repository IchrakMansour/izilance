import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TotalProducts from './components/TotalProducts';
import TotalProfit from './components/TotalProfit';
import OrdersToday from './components/OrdersToday';
import Subscriptions from './components/Subscriptions';
import TopSellingProducts from './components/TopSellingProducts';
import SalesStatistic from './components/SalesStatistic';
import RecentOrders from './components/RecentOrders';
import ProductSales from './components/ProductSales';
import SalesStatistisBar from './components/SalesStatistisBar';
import {NewOrderTableProps} from '../../../shared/prop-types/TablesProps';
import {RTLProps} from '../../../shared/prop-types/ReducerProps';

const ECommerceDashboard = ({t, newOrder, rtl, dispatch}) => (
    <Container className="dashboard">
        <Row>
            <Col md={12}>
                <h3 className="page-title">{t('dashboard_commerce.page_title')}</h3>
            </Col>
        </Row>
        <Row>
            <TotalProducts/>
            <TotalProfit/>
            <OrdersToday/>
            <Subscriptions/>
        </Row>
        <Row>
            <ProductSales rtl={rtl.direction}/>
            {/* <BasicCard/> */}
            <SalesStatistic/>
            <SalesStatistisBar/>
            <TopSellingProducts dir={rtl.direction}/>
            {/* <NewOrders newOrder={newOrder} onDeleteRow={onDeleteRow(dispatch, newOrder)}/> */}
            <RecentOrders/>
        </Row>
    </Container>
);

ECommerceDashboard.propTypes = {
    newOrder: NewOrderTableProps.isRequired,
    dispatch: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    rtl: RTLProps.isRequired
};

export default connect(state => ({newOrder: state.newOrder.items, rtl: state.rtl}))(withTranslation('common')(ECommerceDashboard));
