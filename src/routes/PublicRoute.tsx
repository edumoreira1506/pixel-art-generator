import React, { ReactElement } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { routes } from '../config/constants';

type PublicRouteType = {
  component: () => ReactElement;
  exact?: boolean;
  path: string;
}

export default function PublicRoute({ component: Component, ...rest }: PublicRouteType): ReactElement {
  // eslint-disable-next-line no-constant-condition
  const renderChildren = (props: any) => (true
    ? <Component {...props} />
    : <Redirect to={routes.HOME} />
  );

  return (<Route {...rest} render={renderChildren} />);
}
