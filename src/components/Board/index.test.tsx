import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Board from '.';

describe('<Board />', () => {
  const renderBoard = (overrideProps = {}) => {
    const defaultProps = {
      items: [],
      margin: 10,
      onChange: jest.fn(),
      size: 15,
      color: 'red'
    };
    const { getByText, container, getByTestId } = render(<Board {...defaultProps} {...overrideProps} />);

    return { getByText, container, getByTestId };
  };

  it('renders the component', () => {
    const { container } = renderBoard();

    expect(container).toBeVisible();
  });

  it('renders the right color of board item', () => {
    const color = '#000000';
    const boardItems = Array(1).fill([color]);
    const props = { items: boardItems };

    const { container } = renderBoard(props);

    expect(container.querySelector('li')).toHaveStyle(`background-color: ${color};`);
  });

  it('renders the right size of board item', () => {
    const size = 30;
    const boardItems = Array(1).fill(['#000000']);
    const props = { items: boardItems, size };

    const { container } = renderBoard(props);

    expect(container.querySelector('li')).toHaveStyle(`width: ${size}px;`);
    expect(container.querySelector('li')).toHaveStyle(`height: ${size}px;`);
  });

  it('renders all board items', () => {
    const amountOfItems = 50;
    const boardItems = Array(amountOfItems).fill(['#000000']);
    const props = { items: boardItems };

    const { container } = renderBoard(props);

    expect(container.querySelectorAll('li').length).toBe(amountOfItems);
  });

  it('calls onChange', () => {
    const onChange = jest.fn();
    const items = [['red']];

    const { getByTestId } = renderBoard({ onChange, items });

    fireEvent.click(getByTestId('board-item-0-red'));

    expect(onChange).toHaveBeenCalled();
  });
});
