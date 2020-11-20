import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import FirebaseIcon from 'mdi-react/FirebaseIcon';
import withAuthFirebase from '../../../shared/components/auth/withAuthFirebase';
import { useAuth0 } from '../../../shared/components/auth/withAuth0';
import Loading from '../../../shared/components/Loading';
import LogInForm from '../../../shared/components/loginForm/LogInForm';

const auth0Icon = `${process.env.PUBLIC_URL}/img/auth0.svg`;

const LogIn = ({ changeIsOpenModalFireBase }) => {
  const {
    loginWithRedirect, loading,
  } = useAuth0();
  if (loading) {
    return (<Loading loading={loading} />);
  }
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
            <h4 className="account__subhead subhead">Start your business easily</h4>
          </div>
          <LogInForm onSubmit form="log_in_form"/>
        </div>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  changeIsOpenModalFireBase: PropTypes.func.isRequired,
};

export default withAuthFirebase(LogIn);
