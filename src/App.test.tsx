import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { APP_TITLE } from './config/constants';

describe('Pixel Art Generator - App', () => {
  const renderApp = () => {
    const { getByText } = render(<App />);

    return { getByText };
  };

  it('renders the site title', () => {
    const { getByText } = renderApp();

    expect(getByText(APP_TITLE)).toBeVisible();
  });
});
