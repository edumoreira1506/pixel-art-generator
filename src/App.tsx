import React, { ReactElement } from 'react';

import { ConfigProvider } from './contexts/config';

import BoardContainer from './containers/Board';
import SliderContainer from './containers/Slider';

import Header from './components/Header';

const App = (): ReactElement => (
  <ConfigProvider>
    <Header />
    <SliderContainer />
    <BoardContainer />
  </ConfigProvider>
);

export default App;
