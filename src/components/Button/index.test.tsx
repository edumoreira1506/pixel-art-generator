import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import Button from '.';

describe('<Button />', () => {
  const renderButton = (overrideProps = {}) => {
    const defaultProps = {
      children: 'I am the children',
      onClick: jest.fn()
    };

    const { container, getByText } = render(<Button {...defaultProps} {...overrideProps} />);

    return { container, getByText };
  };

  it('renders the component', () => {
    const { container } = renderButton();

    expect(container).toBeInTheDocument();
  });

  it('renders the component', () => {
    const children = 'childrennn';
    const { getByText } = renderButton({ children });

    expect(getByText(children)).toBeInTheDocument();
  });

  it('calls onClick', () => {
    const onClick = jest.fn();
    const children = 'childrennn';
    const { getByText } = renderButton({ children, onClick });

    fireEvent.click(getByText(children));

    expect(onClick).toHaveBeenCalled();
  });
});
