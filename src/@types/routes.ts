import { ReactElement } from 'react';

export type RouteType = {
  component: () => ReactElement;
  exact?: boolean;
  path: string;
}
