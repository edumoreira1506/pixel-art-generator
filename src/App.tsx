import React, { ReactElement } from 'react';

import { ConfigProvider } from './contexts/config';

import BoardContainer from './containers/Board';
import SliderContainer from './containers/Slider';

import Header from './components/Header';
import Box from './components/Box';
import ColorContainer from './containers/Color';

const App = (): ReactElement => (
  <ConfigProvider>
    <Box>
      <Header />
      <SliderContainer />
      <ColorContainer />
      <BoardContainer />
    </Box>
  </ConfigProvider>
);

export default App;
