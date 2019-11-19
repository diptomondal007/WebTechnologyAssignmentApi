import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextFieldGroup from './generic/TextFieldGroup';
import { Redirect } from 'react-router-dom';

import {history} from '../app';
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      birthdate:'',
      password: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.placeholder]: e.target.value });
  }



  onSubmit(e) {
    e.preventDefault();
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          });
   
        },
        
      );
  }

  render() {
    const {  name ,  email,birthdate , password } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>SignUp!</h1>

        <TextFieldGroup
          label="Name"
          onChange={this.onChange}
          value={name}
          field="name"
          placeholder="name"
        />

        <TextFieldGroup
          label="Email"
          onChange={this.onChange}
          value={email}
          placeholder="email"
        />
        <TextFieldGroup
          label="Birthdate"
          onChange={this.onChange}
          value={birthdate}
          placeholder="birthdate"
        />
        <TextFieldGroup
          label="Password"
          onChange={this.onChange}
          value={password}
          field="password"
          placeholder="password"
        />

        <div className="form-group">
          <button className="ui button" type="submit">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
}


export default SignupForm;
