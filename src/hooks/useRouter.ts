import { useCallback } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

type UseRouterType = {
  route: string;
  setRoute: (newRoute: string) => void;
  params: Record<string, string>;
}

export default function useRouter(): UseRouterType {
  const location = useLocation();
  const history = useHistory();
  const params = useParams();

  const setRoute = useCallback((newRoute: string) => history.push(newRoute), [history]);

  return { route: location.pathname, setRoute, params };
}
