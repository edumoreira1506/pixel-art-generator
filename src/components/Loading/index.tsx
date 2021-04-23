import React, { ReactElement } from 'react';

import './index.css';

const Loading = (): ReactElement => (
  <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
);

export default Loading;
