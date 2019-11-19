import React from 'react';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';
import { addFlashMessage } from '../actions/flashMessages.js';
import {withRouter , Redirect} from 'react-router';
import NavBar from './navbar';

class SignupPage extends React.Component {
  render() {
    const { userSignupRequest, addFlashMessage } = this.props;
    return (
        <div className="ui container">
            <NavBar />
          <SignupForm
            userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage} />
        </div>
      
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
}


export default withRouter(connect(null, { userSignupRequest, addFlashMessage })(SignupPage));
