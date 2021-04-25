import React, { ReactElement } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Art from '../pages/Art';

import { routes } from '../config/constants';

const Routes = (): ReactElement => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path={routes.LOGIN} component={Login} />

      <PrivateRoute exact path={routes.HOME} component={Home} />

      <PrivateRoute exact path={routes.ART(':artId')} component={Art} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
