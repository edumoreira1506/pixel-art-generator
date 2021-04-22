import React, { ReactElement } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import PublicRoute from './PublicRoute';

import Home from '../pages/Home';
import Login from '../pages/Login';

import { routes } from '../config/constants';

const Routes = (): ReactElement => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path={routes.HOME} component={Home} />

      <PublicRoute exact path={routes.LOGIN} component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
