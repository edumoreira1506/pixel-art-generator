import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { APP_TITLE } from './config/constants';

describe('Pixel Art Generator - App', () => {
  const renderApp = () => {
    const { getByText, container } = render(<App />);

    return { getByText, container };
  };

  it('renders the app', () => {
    const { container } = renderApp();

    expect(container).toBeVisible();
  });

  it('renders the site title', () => {
    const { getByText } = renderApp();

    expect(getByText(APP_TITLE)).toBeVisible();
  });

  const sliders = ['Largura do \'pixel\'', 'Quantidade de pixels'];

  sliders.forEach((slider) => {
    it(`renders "${slider} slider"`, () => {
      const { getByText } = renderApp();

      expect(getByText(slider)).toBeVisible();
    });
  });
});
