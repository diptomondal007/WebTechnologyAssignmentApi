import React from 'react';
import { Menu } from 'semantic-ui-react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../actions/authActions'

class NavBar extends React.Component {

    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    logout(e){
        e.preventDefault();
        this.props.logout();
            
    }
    render() {
        const { activeItem } = this.state
        const {isAuthenticated} = this.props.auth;

        

        const LoggedInUser = (
            <Menu.Menu position='right'>
                <Menu.Item
                    name='Logout'
                    active={activeItem === 'logout'}
                    onClick={ this.logout.bind(this) }
                />
            </Menu.Menu>
        );

        const GuestUser = (
            <Menu.Menu position='right'>
                <Menu.Item
                href="/login"
                    name='SignIn'
                    active={activeItem === 'signin'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                href="/registration"
                    name='SignUp'
                    active={activeItem === 'signup'}
                    onClick={this.handleItemClick}
                />
            </Menu.Menu>

        );

        return (
            <Menu inverted>
                <Menu.Item
                    href="/"
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='profile'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                />

                {isAuthenticated ? LoggedInUser : GuestUser}


            </Menu>
        );
    }
}


NavBar.propTypes ={
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

const mapStateToProps =state =>{
    return{
        auth : state.auth
    };
}

export default connect(mapStateToProps ,{logout})(NavBar);