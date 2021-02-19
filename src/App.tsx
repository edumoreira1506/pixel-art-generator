import React, { ReactElement } from 'react';

import Header from './components/Header';
import Board from './components/Board';

const App = (): ReactElement => (
  <>
    <Header />
    <Board items={Array(100).fill({ color: 'red' })} />
  </>
);

export default App;
