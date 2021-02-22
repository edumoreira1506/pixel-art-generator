import React, { useState, createContext, ReactElement, ReactNode } from 'react';

import { configKeys } from '../config/constants';

const INITIAL_CONFIGS = {
  [configKeys.ITEM_WIDTH]: 50,
  [configKeys.AMOUNT_OF_ITEMS]: 1000,
  [configKeys.MARGIN_BETWEEN]: 2,
};

export const ConfigContext = createContext({
  configs: INITIAL_CONFIGS,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setConfigs: (_object: any): any => null,
});

type ConfigProviderProps = {
  children: ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps): ReactElement => {
  const [configs, setConfigs] = useState(INITIAL_CONFIGS);

  const contextProviderValue = { configs, setConfigs };

  return (
    <ConfigContext.Provider value={contextProviderValue}>
      {children}
    </ConfigContext.Provider>
  );
};
