import React, { ReactElement } from 'react';

import Box from '../../components/Box';
import Header from '../../components/Header';
import BoardContainer from '../../containers/Board';
import ColorContainer from '../../containers/Color';
import SliderContainer from '../../containers/Slider';
import { ConfigProvider } from '../../contexts/config';

const ArtPage = (): ReactElement => (
  <ConfigProvider>
    <Box>
      <Header />
      <SliderContainer />
      <ColorContainer />
      <BoardContainer />
    </Box>
  </ConfigProvider>
);

export default ArtPage;
