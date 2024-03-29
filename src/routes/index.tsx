import React, { ReactElement } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Art from '../pages/Art';
import NewArt from '../pages/NewArt';
import NewUser from '../pages/NewUser';

import { routes } from '../config/constants';

const Routes = (): ReactElement => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path={routes.LOGIN} component={Login} />

      <PublicRoute exact path={routes.NEW_USER} component={NewUser} />

      <PrivateRoute exact path={routes.HOME} component={Home} />

      <PrivateRoute exact path={routes.NEW_ART} component={NewArt} />

      <PrivateRoute exact path={routes.ART(':folderId', ':artId')} component={Art} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
