import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import * as firebase from 'firebase/app';
import RegisterForm from '../../../shared/components/login_register/LoginRegisterForm';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      error: '',
    };
  }

  render() {
    const { error } = this.state;
    return (
      <div className="account account--not-photo">
        <div className="account__wrapper">
          <div className="account__card">
            <div className="account__head">
              <h3 className="account__title">Welcome to
                <span className="account__logo"> Izi
                  <span className="account__logo-accent">Lance</span>
                </span>
              </h3>
              <h4 className="account__subhead subhead">Create an account</h4>
            </div>
            <RegisterForm onSubmit errorMessage={error} />
            <div className="account__have-account">
              <p>Already have an account? <NavLink to="/">Login</NavLink></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Register);
