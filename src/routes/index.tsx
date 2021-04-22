import React, { ReactElement } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import PublicRoute from './PublicRoute';

import Home from '../pages/Home';

import { routes } from '../config/constants';

const Routes = (): ReactElement => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path={routes.HOME} component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
