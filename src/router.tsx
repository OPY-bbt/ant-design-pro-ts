import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './routers/Dashboard/Analysis';
import Login from './routers/User/Login';

function RouterConfig() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/user" component={Login} />
        </Switch>
      </Router>
  );
}

export default RouterConfig;
