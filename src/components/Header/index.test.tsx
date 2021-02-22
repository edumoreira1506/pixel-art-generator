import React from 'react';
import { render } from '@testing-library/react';
import { APP_TITLE } from '../../config/constants';

import Header from '.';

describe('<Header />', () => {
  const renderHeader = () => {
    const { getByText, container } = render(<Header />);

    return { getByText, container };
  };

  it('renders the component', () => {
    const { container } = renderHeader();

    expect(container).toBeVisible();
  });

  it('renders site title', () => {
    const { getByText } = renderHeader();

    expect(getByText(APP_TITLE)).toBeVisible();
  });
});
