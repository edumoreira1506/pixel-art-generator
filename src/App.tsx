import React, { ReactElement } from 'react';

import Routes from './routes';
import { AuthProvider } from './contexts/auth';

const App = (): ReactElement => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default App;
