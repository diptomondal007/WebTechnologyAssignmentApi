import React from 'react';
import NavBar from './navbar';
import LoginForm from './LoginForm';

class Login extends React.Component {
  render() {
    return (
      <div className="ui container">
          <NavBar />

          <LoginForm />

      </div>
    );
  }
}

export default Login;
