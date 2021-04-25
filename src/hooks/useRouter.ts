import { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router';

type UseRouterType = {
  route: string;
  setRoute: (newRoute: string) => void;
}

export default function useRouter(): UseRouterType {
  const location = useLocation();
  const history = useHistory();

  const setRoute = useCallback((newRoute: string) => history.push(newRoute), [history]);

  return { route: location.pathname, setRoute };
}
