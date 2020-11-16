import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import renderCheckBoxField from '../../../../shared/components/form/CheckBox';

const validate = values => {return values;}

class LogInForm extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.state = {
            showPassword: false
        };
    }
    showPassword = (e) => {
        e.preventDefault();
        this.setState({
            showPassword: !this.state.showPassword
        });
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__form-group">
                    <span className="form__form-group-label">Username</span>
                    <div className="form__form-group-field">
                        <div className="form__form-group-icon">
                            <AccountOutlineIcon/>
                        </div>
                        <Field name="name" component="input" type="text" placeholder="Name"/>
                    </div>
                </div>
                <div className="form__form-group">
                    <span className="form__form-group-label">Password</span>
                    <div className="form__form-group-field">
                        <div className="form__form-group-icon">
                            <KeyVariantIcon/>
                        </div>
                        <Field
                            name="password"
                            component="input"
                            type={this.state.showPassword ? 'text' : 'password'}
                            placeholder="Password"/>
                        <button
                            className={`form__form-group-button${this.state.showPassword ? ' active' : ''}`}
                            onClick={e => this.showPassword(e)}><EyeIcon/>
                        </button>
                    </div>
                    <div className="account__forgot-password">
                        <a href="/reset_password">Forgot a password?</a>
                    </div>
                </div>
                <div className="form__form-group">
                    <div className="form__form-group-field">
                        <Field name="remember_me" component={renderCheckBoxField} label="Remember me"/>
                    </div>
                </div>
                <Link className="btn btn-primary account__btn account__btn--small" to="/createProduit">Sign In</Link>
                <Link className="btn btn-outline-primary account__btn account__btn--small" to="/register">Create Account</Link>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme.className,
        name: state.form.logInForm && state.form.logInForm.values.name
    };
};

export default reduxForm({form: 'logInForm', validate, destroyOnUnmount: false})(connect(mapStateToProps, null)(LogInForm));
