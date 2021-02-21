import { useContext } from 'react';
import { ConfigContext } from '../contexts/config';

const useConfig = (configName: string): Array<any> => {
  const { configs, setConfigs } = useContext(ConfigContext);
  const config = configs[configName];

  const setConfig = (newConfigValue: number) => setConfigs((prevConfigs: any) => ({
    ...prevConfigs,
    [configName]: newConfigValue,
  }));

  return [config, setConfig];
};

export default useConfig;
