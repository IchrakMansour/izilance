import React from 'react';
import {Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import CurrencyUsdIcon from 'mdi-react/CurrencyUsdIcon';
import TagIcon from 'mdi-react/TagIcon';
import renderDropZoneMultipleField from '../../../../shared/components/form/DropZoneMultiple';
import renderSelectField from '../../../../shared/components/form/Select';

const redirectToStock = () => {
  try{
      this.props.history.push('/stock');
  } catch(e) {
      console.log(e);
  }
}
const CreateProductForm = ({handleSubmit}) => (
    <form className="form product-edit" onSubmit={handleSubmit}>
        <div className="form__half">
            <div className="form__form-group">
                <span className="form__form-group-label">Nom du produit</span>
                <div className="form__form-group-field">
                    <Field name="name" component="input" type="text"/>
                </div>
            </div>
            <div className="form__form-group">
                <span className="form__form-group-label">Description</span>
                <div className="form__form-group-field">
                    <Field name="full_description" component="textarea" type="text"/>
                </div>
            </div>
            <div className="form__form-group-id-category">
                <div className="form__form-group">
                    <span className="form__form-group-label">Catégorie</span>
                    <div className="form__form-group-field">
                        <Field name="category" component={renderSelectField} type="text" options={[{ value: 'one', label: 'One' }, {  value: 'two', label: 'Two' }]}/>
                    </div>
                </div>
            </div>
            <div className="form__form-group form__form-group-price">
                <span className="form__form-group-label">Prix Fournisseur</span>
                <div className="form__form-group-field">
                    <Field name="prixFournisseur" component="input" type="text"/>
                    <div className="form__form-group-icon">DT</div>
                </div>
            </div>
            <div className="form__form-group form__form-group-price">
                <span className="form__form-group-label">Prix minimum de vente</span>
                <div className="form__form-group-field">
                    <Field name="prixMin" component="input" type="text"/>
                    <div className="form__form-group-icon">DT</div>
                </div>
            </div>
            <div className="form__form-group form__form-group-price">
                <span className="form__form-group-label">Quantité</span>
                <div className="form__form-group-field">
                    <Field name="quantite" component="input" type="number" min="1"/>
                </div>
            </div>
            <div className="form__form-group-id-category">
                <div className="form__form-group form__form-group-id">
                    <span className="form__form-group-label">Largeur</span>
                    <div className="form__form-group-field">
                        <Field name="largeur" component="input" type="text"/>
                    </div>
                </div>
                <div className="form__form-group form__form-group-id">
                    <span className="form__form-group-label">Hauteur</span>
                    <div className="form__form-group-field">
                        <Field name="hauteur" component="input" type="text"/>
                    </div>
                </div>
                <div className="form__form-group form__form-group-id ml-2">
                    <span className="form__form-group-label">Longueur</span>
                    <div className="form__form-group-field">
                        <Field name="longueur" component="input" type="text"/>
                    </div>
                </div>
                <div className="form__form-group form__form-group-id ml-2">
                    <span className="form__form-group-label">Poids</span>
                    <div className="form__form-group-field">
                        <Field name="poids" component="input" type="text"/>
                    </div>
                </div>
                <div className="form__form-group">
                    <span className="form__form-group-label">Condition de livraison</span>
                  <div className="form__form-group-field">
                      <Field name="conditionLivraison" component={renderSelectField} type="text" options={[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' },]}/>
                  </div>
                </div>
           </div>
        </div>
        <div className="form__half">
            <div className="form__form-group">
                <div className="form__form-group-field">
                    <Field name="files" component={renderDropZoneMultipleField}/>
                </div>
            </div>
        </div>
        <div className="ml-auto">
            <ButtonToolbar className="form__button-toolbar">
                <Link to='/stock'><Button type="button" onClick={redirectToStock}>Annuler</Button></Link>
                {window.location.pathname === '/stock/creer_produit'?<Button color="primary" type="submit">Enregistrer</Button>:<Button color="primary" type="submit">Modifier</Button> }  
            </ButtonToolbar>
        </div>
    </form>
);

CreateProductForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'product_edit_form', // a unique identifier for this form
})(CreateProductForm);
