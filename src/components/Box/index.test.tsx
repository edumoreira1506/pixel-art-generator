import React from 'react';
import { render } from '@testing-library/react';

import Box from '.';

describe('<Box />', () => {
  const renderBox = (overrideProps = {}) => {
    const defaultProps = {
      children: null,
    };
    const { getByText, container } = render(<Box {...defaultProps} {...overrideProps} />);

    return { getByText, container };
  };

  it('renders the component', () => {
    const { container } = renderBox();

    expect(container).toBeVisible();
  });

  it('renders the children', () => {
    const children = 'I am the children!';
    const props = { children };
    const { getByText } = renderBox(props);

    expect(getByText(children)).toBeVisible();
  });
});
