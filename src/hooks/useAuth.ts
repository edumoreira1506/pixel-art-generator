import { useContext } from 'react';

import { AuthContextType } from '../@types/contexts';
import { AuthContext } from '../contexts/auth';

export default function useAuth(): AuthContextType {
  const { token, setToken, isAuthenticated } = useContext(AuthContext);

  return { token, setToken, isAuthenticated };
}
