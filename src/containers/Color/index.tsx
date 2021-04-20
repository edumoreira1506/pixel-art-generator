import React, { ReactElement } from 'react';
import { SketchPicker } from 'react-color';

import { configKeys } from '../../config/constants';
import useConfig from '../../hooks/useConfig';

const ColorContainer = (): ReactElement => {
  const [color, setColor] = useConfig(configKeys.COLOR);

  return (
    <SketchPicker color={color} onChange={({ hex }) => setColor(hex)} />
  );
};

export default ColorContainer;
