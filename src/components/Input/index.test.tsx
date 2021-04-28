import React from 'react';
import { render } from '@testing-library/react';

import Input from '.';

describe('<Input />', () => {
  const renderInput = (overrideProps = {}) => {
    const defaultProps = {
      value: '',
      onChange: jest.fn(),
      placeholder: '',
      type: 'text',
      required: true
    };
    const { container, getByText, getByTestId } = render(<Input {...defaultProps} {...overrideProps} />);

    return { container, getByText, getByTestId };
  };

  it('renders the component', () => {
    const { container } = renderInput();

    expect(container).toBeInTheDocument();
  });
});
