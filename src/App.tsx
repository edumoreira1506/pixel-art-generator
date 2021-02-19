import React, { ReactElement } from 'react';

import Header from './components/Header';
import Board from './components/Board/Board';

const App = (): ReactElement => (
  <>
    <Header />
    <Board />
  </>
);

export default App;
