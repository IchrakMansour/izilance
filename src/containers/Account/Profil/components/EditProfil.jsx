import React, {Component} from 'react';
import {Card, CardBody, Col, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import EyeIcon from 'mdi-react/EyeIcon';
import renderFileInputField from '../../../../shared/components/form/FileInput';

const redirectToStock = () => {
    try {
        this
            .props
            .history
            .push('/stock');
    } catch (e) {
        console.log(e);
    }
}

class EditProfil extends Component {
    constructor() {
        super();
        this.state = {
          showPassword: false, showPasswordN: false, showPasswordRN: false
        };
      }
    
      showPassword = (e) => {
            e.preventDefault();
            this.setState(prevState => ({ showPassword: !prevState.showPassword}));
      };
      showPasswordN = (e) => {
            e.preventDefault();
            this.setState(prevState => ({showPasswordN: !prevState.showPasswordN}));
      };
      showPasswordRN = (e) => {
         e.preventDefault();
         this.setState(prevState => ({ showPasswordRN: !prevState.showPasswordRN, }));
     };
    render() {
        const { showPassword, showPasswordN, showPasswordRN } = this.state;
        return (
            <Col md={12} lg={12}>
                <Card>
                    <CardBody>
                        <form className="form product-edit">
                            <div className="form__half">
                                <div className="form__form-group">
                                    <span className="form__form-group-label">Nom d'entreprise</span>
                                    <div className="form__form-group-field">
                                        <Field name="nomEntreprise" component="input" type="text" placeholder="Nom d'entreprise"/>
                                    </div>
                                </div>
                                <div className="form__form-group">
                                    <span className="form__form-group-label">Email</span>
                                    <div className="form__form-group-field">
                                        <Field name="email" component="input" type="text" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="form__form-group">
                                    <span className="form__form-group-label">Télèphone</span>
                                    <div className="form__form-group-field">
                                        <Field name="telephone" component="input" type="text" placeholder="Télèphone"/>
                                    </div>
                                </div>
                                <div className="form__form-group">
                                    <span className="form__form-group-label">Code TVA</span>
                                    <div className="form__form-group-field">
                                        <Field name="codeTVA" component="input" type="text" placeholder="Code TVA"/>
                                    </div>
                                </div>
                                <div className="form__form-group">
                                    <span className="form__form-group-label">Gérant</span>
                                    <div className="form__form-group-field">
                                        <Field name="gerant" component="input" type="text" placeholder="Gérant"/>
                                    </div>
                                </div>
                                <div className="form__form-group">
                                    <span className="form__form-group-label">Logo</span>
                                    <div className="form__form-group-field">
                                        <Field name="logo" component={renderFileInputField} placeholder="Logo"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form__half">
                                <div className="form__form-group">
                                    <span className="form__form-group-label">Ancien mot de passe</span>
                                    <div className="form__form-group-field">
                                        <Field name="ancienMotDePasse" component="input" type={showPassword ? 'text' : 'password'} placeholder="Ancien mot de passe" />
                                        <button type="button" className={`form__form-group-button${showPassword ? ' active' : ''}`}  onClick={e => this.showPassword(e)}><EyeIcon /></button>
                                    </div>
                                </div>
                                <div className="form__form-group">
                                    <span className="form__form-group-label">Nouveau mot de passe</span>
                                    <div className="form__form-group-field">
                                        <Field name="nouveauMotDePasse" component="input" type={showPasswordN ? 'text' : 'password'} placeholder="Nouveau mot de passe" />
                                        <button type="button" className={`form__form-group-button${showPasswordN ? ' active' : ''}`}  onClick={e => this.showPasswordN(e)}><EyeIcon /></button>
                                    </div>
                                </div>
                                <div className="form__form-group">
                                    <span className="form__form-group-label">Retaper votre nouveau mot de passe</span>
                                    <div className="form__form-group-field">
                                        <Field name="reNouveauMotDePasse" component="input" type={showPasswordRN ? 'text' : 'password'} placeholder="Retaper nouveau mot de passe" />
                                        <button type="button" className={`form__form-group-button${showPasswordRN ? ' active' : ''}`}  onClick={e => this.showPasswordRN(e)}><EyeIcon /></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </CardBody>
                </Card>
                <div>
                    <ButtonToolbar className="form__button-toolbar">
                        <Button color="danger" type="submit">Supprimer votre compte</Button>
                    </ButtonToolbar>
                </div>
            </Col>
        );
    }
}
EditProfil.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'EditProfil_edit_form', 
})(EditProfil);