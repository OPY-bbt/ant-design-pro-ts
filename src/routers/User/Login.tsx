import * as React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login
        <Link to="/">jump to home</Link>
      </div>
    );
  }
}

export default Login;