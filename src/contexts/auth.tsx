import React, { useState, createContext, ReactElement } from 'react';

import { ProviderProps } from '../@types/provider';
import StoreService from '../services/StoreService';

const INITIAL_TOKEN_VALUE = StoreService.getToken();

export const AuthContext = createContext({
  token: INITIAL_TOKEN_VALUE,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setToken: (_object: any): any => null,
  isAuthenticated: false,
});

export const AuthProvider = ({ children }: ProviderProps): ReactElement => {
  const [token, setToken] = useState(INITIAL_TOKEN_VALUE);

  const contextProviderValue = { token, setToken, isAuthenticated: Boolean(token) };

  return (
    <AuthContext.Provider value={contextProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};
