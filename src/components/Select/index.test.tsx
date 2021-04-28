import React from 'react';
import { render } from '@testing-library/react';

import Select from '.';

describe('<Select />', () => {
  const renderSelect = (overrideProps = {}) => {
    const defaultProps = {
      options: [],
      value: '',
      onChange: jest.fn(),
      placeholder: ''
    };
    const { container, getByText, getByTestId } = render(<Select {...defaultProps} {...overrideProps} />);

    return { container, getByText, getByTestId };
  };

  it('renders the component', () => {
    const { container } = renderSelect();

    expect(container).toBeInTheDocument();
  });

  it('renders the placeholder', () => {
    const placeholder = 'i am the placeholder';
    const { getByText } = renderSelect({ placeholder });

    expect(getByText(placeholder)).toBeInTheDocument();
  });

  it('renders the options', () => {
    const options = [{value: 'value', label: 'label'}];
    const { getByText } = renderSelect({ options });

    expect(getByText(options[0].label)).toBeInTheDocument();
  });
});
