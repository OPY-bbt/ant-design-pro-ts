import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import getNavData from './common/nav';

function getLayout(navData: object, path: string): object {
  return navData;
}

function RouterConfig() {

  const navData = getNavData();
  const UserLayout = getLayout(navData, 'UserLayout').component;
  const BaseLayout = getLayout(navData, 'BasicLayout').component;
  return (
      <Router>
        <Switch>
          <Route path="/" exact={true} render={() => <BaseLayout />} />
          <Route path="/user" render={() => <UserLayout />} />
        </Switch>
      </Router>
  );
}

export default RouterConfig;
