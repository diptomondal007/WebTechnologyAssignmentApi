import React from 'react';
import TextFieldGroup from './generic/TextFieldGroup';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import {history} from '../app';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  onSubmit(e) {
    e.preventDefault();
      this.props.login(this.state).then(
        (res) => history.push('/'),
      );
  }

  onChange(e) {
    this.setState({ [e.target.placeholder]: e.target.value });
  }

  render() {
    const {  email, password} = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>

        <TextFieldGroup
          field="email"
          label="Email"
          placeholder="email"
          value={email}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          placeholder="password"
          onChange={this.onChange}
        />

        <div className="form-group"><button className="ui button" type="submit">Login</button></div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}


export default connect(null, { login })(LoginForm);
