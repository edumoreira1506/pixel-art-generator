import { useCallback, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useDebouncedEffect = (effect: any, delay: number, deps: Array<any>): void => {
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [callback, delay]);
};

export default useDebouncedEffect;
