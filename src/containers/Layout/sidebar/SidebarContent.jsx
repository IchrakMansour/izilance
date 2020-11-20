import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
    static propTypes = {
        changeToDark: PropTypes.func.isRequired,
        changeToLight: PropTypes.func.isRequired,
        onClick: PropTypes.func.isRequired,
        sidebarCollapse: PropTypes.bool
    };

    static defaultProps = {
        sidebarCollapse: false
    }

    hideSidebar = () => {
        const {onClick} = this.props;
        onClick();
    };

    render() {

        return (
            <div className="sidebar__content">
                <ul className="sidebar__block">
                    <SidebarLink title="Tableau du bord" icon="home" route="/tableau_bord" onClick={this.hideSidebar}/>
                    <SidebarLink title="Mon stock" icon="store" route="/stock" onClick={this.hideSidebar}/>
                    <SidebarLink title="Mes revendeurs" icon="users" route="/revendeurs" onClick={this.hideSidebar}/>
                    <SidebarLink title="Mes messages" icon="envelope" route="/messages" onClick={this.hideSidebar}/>
                    <SidebarLink title="Mes commandes" icon="cart" route="/commandes" onClick={this.hideSidebar}/>
                </ul>
                <ul className="sidebar__block__bottom">
                    <SidebarLink title="Notifications" icon="alarm" route='/notifications' onClick={this.hideSidebar}/>
                    <SidebarLink title="Log Out" icon="exit" route="/" onClick={this.hideSidebar}/>
                </ul>
            </div>
        );
    }
}

export default SidebarContent;
