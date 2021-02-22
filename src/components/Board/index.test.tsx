import React from 'react';
import { render } from '@testing-library/react';

import Board from '.';

describe('<Board />', () => {
  const renderBoard = (overrideProps = {}) => {
    const defaultProps = {
      items: [],
    };
    const { getByText, container } = render(<Board {...defaultProps} {...overrideProps} />);

    return { getByText, container };
  };

  it('renders the component', () => {
    const { container } = renderBoard();

    expect(container).toBeVisible();
  });

  it('renders the right color of board item', () => {
    const color = '#000000';
    const boardItem = { color, size: 30 };
    const boardItems = Array(1).fill(boardItem);
    const props = { items: boardItems };

    const { container } = renderBoard(props);

    expect(container.querySelector('li')).toHaveStyle(`background-color: ${color};`);
  });

  it('renders the right size of board item', () => {
    const size = 30;
    const boardItem = { color: '#000000', size };
    const boardItems = Array(1).fill(boardItem);
    const props = { items: boardItems };

    const { container } = renderBoard(props);

    expect(container.querySelector('li')).toHaveStyle(`width: ${size}px;`);
    expect(container.querySelector('li')).toHaveStyle(`height: ${size}px;`);
  });

  it('renders all board items', () => {
    const boardItem = { color: '#000000', size: 30 };
    const amountOfItems = 50;
    const boardItems = Array(amountOfItems).fill(boardItem);
    const props = { items: boardItems };

    const { container } = renderBoard(props);

    expect(container.querySelectorAll('li').length).toBe(amountOfItems);
  });
});
