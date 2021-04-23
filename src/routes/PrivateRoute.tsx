import React, { ReactElement } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { RouteType } from '../@types/routes';
import { routes } from '../config/constants';
import useAuth from '../hooks/useAuth';

export default function PrivateRoute({ component: Component, ...rest }: RouteType): ReactElement {
  const { isAuthenticated } = useAuth();
  const renderChildren = (props: any) => (isAuthenticated
    ? <Component {...props} />
    : <Redirect to={routes.LOGIN} />
  );

  return (<Route {...rest} render={renderChildren} />);
}
