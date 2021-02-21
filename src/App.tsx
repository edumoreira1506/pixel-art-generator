import React, { ReactElement, useState } from 'react';

import Header from './components/Header';
import Board from './components/Board';
import Slider from './components/Slider';

const App = (): ReactElement => {
  const [itemWidth, setItemWidth] = useState<number>(50);
  const [amountOfItems, setAmountOfItems] = useState<number>(1000);

  return (
    <>
      <Header />
      <Slider label="Largura do 'pixel'" value={itemWidth} onChange={setItemWidth} />
      <Slider label="Quantidade de pixels" value={amountOfItems / 10} onChange={(newAmount: number) => setAmountOfItems(newAmount * 10)} />
      <Board items={Array(amountOfItems).fill({ color: 'red', size: itemWidth })} />
    </>
  );
};

export default App;
