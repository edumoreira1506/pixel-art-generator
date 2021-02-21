import React, { ReactElement, useState } from 'react';

import Header from './components/Header';
import Board from './components/Board';
import Slider from './components/Slider';

const App = (): ReactElement => {
  const [itemWidth, setItemWidth] = useState<number>(30);

  return (
    <>
      <Header />
      <Slider label="Largura do 'pixel'" value={itemWidth} onChange={setItemWidth} />
      <Board items={Array(100).fill({ color: 'red' })} />
    </>
  );
};

export default App;
