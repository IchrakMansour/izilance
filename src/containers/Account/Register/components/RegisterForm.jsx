import React, {useState, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon';
import {Button, Alert} from 'reactstrap';

class RegisterForm extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        errorMessage: PropTypes.string
    };

    constructor() {
        super();
        this.state = {
            showPassword: false
        };
    }
    toggleShowPassword = (e) => {
        e.preventDefault();
        this.setState({
            showPassword: !this.state.showPassword
        });
    };
     

    render() {
        const {handleSubmit, errorMessage} = this.props;
        return (
            <form className="form" onSubmit={handleSubmit}>
                <Alert color="danger" isOpen={!!errorMessage}>
                    {errorMessage}
                </Alert>
                <div className="form__form-group">
                    <span className="form__form-group-label">Username</span>
                    <div className="form__form-group-field">
                        <div className="form__form-group-icon">
                            <AccountOutlineIcon/>
                        </div>
                        <Field
                            name="username"
                            component="input"
                            type="text"
                            placeholder="Name"
                            className="input-without-border-radius"/>
                    </div>
                </div>
                <div className="form__form-group">
                    <span className="form__form-group-label">E-mail</span>
                    <div className="form__form-group-field">
                        <div className="form__form-group-icon">
                            <AlternateEmailIcon/>
                        </div>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="example@mail.com"
                            required
                            className="input-without-border-radius"/>
                    </div>
                </div>
                <div className="form__form-group form__form-group--forgot">
                    <span className="form__form-group-label">Password</span>
                    <div className="form__form-group-field">
                        <div className="form__form-group-icon">
                            <KeyVariantIcon/>
                        </div>
                        <Field
                            name="password"
                            component="input"
                            type={this.state.showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            required
                            className="input-without-border-radius"/>
                        <button
                            type="button"
                            className={`form__form-group-button${this.state.showPassword ? ' active': ''}`}
                            onClick={this.toggleShowPassword}><EyeIcon/>
                        </button>
                    </div>
                </div>
                <div className="account__btns register__btns">
                    <Button type="submit" color="primary" className="account__btn">
                        Sign Up
                    </Button>
                </div>
            </form>
        );
    }
}

RegisterForm.defaultProps = {
    errorMessage: ''
};

export default reduxForm({form: 'register_form'})(RegisterForm);
