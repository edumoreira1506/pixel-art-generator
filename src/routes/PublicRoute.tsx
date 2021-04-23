import React, { ReactElement } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { RouteType } from '../@types/routes';
import { routes } from '../config/constants';
import useAuth from '../hooks/useAuth';

export default function PublicRoute({ component: Component, ...rest }: RouteType): ReactElement {
  const { isAuthenticated } = useAuth();
  const renderChildren = (props: any) => (isAuthenticated
    ? <Redirect to={routes.HOME} />
    : <Component {...props} />
  );

  return (<Route {...rest} render={renderChildren} />);
}
