import React, { useState, createContext, ReactElement } from 'react';
import { ProviderProps } from '../@types/provider';

import { configKeys } from '../config/constants';

const INITIAL_CONFIGS = {
  [configKeys.ITEM_WIDTH]: 50,
  [configKeys.COLUMNS]: 10,
  [configKeys.MARGIN_BETWEEN]: 2,
  [configKeys.ROWS]: 10,
  [configKeys.COLOR]: '#000000'
};

export const ConfigContext = createContext({
  configs: INITIAL_CONFIGS,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setConfigs: (_object: any): any => null,
});

export const ConfigProvider = ({ children }: ProviderProps): ReactElement => {
  const [configs, setConfigs] = useState(INITIAL_CONFIGS);

  const contextProviderValue = { configs, setConfigs };

  return (
    <ConfigContext.Provider value={contextProviderValue}>
      {children}
    </ConfigContext.Provider>
  );
};
