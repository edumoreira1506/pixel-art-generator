import React from 'react';
import { render } from '@testing-library/react';

import Slider from '.';

describe('<Slider />', () => {
  const renderSlider = (overrideProps = {}) => {
    const defaultProps = {
      label: 'label',
      value: 10,
      onChange: jest.fn(),
    };
    const { getByText, container } = render(<Slider {...defaultProps} {...overrideProps} />);

    return { getByText, container };
  };

  it('renders the component', () => {
    const { container } = renderSlider();

    expect(container).toBeVisible();
  });

  it('renders label', () => {
    const label = 'label';
    const props = { label };
    const { getByText } = renderSlider(props);

    expect(getByText(label)).toBeVisible();
  });
});
