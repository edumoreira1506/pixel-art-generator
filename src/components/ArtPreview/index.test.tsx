import React from 'react';
import { render } from '@testing-library/react';

import ArtPreview from '.';

describe('<ArtPreview />', () => {
  const renderArtPreview = (overrideProps = {}) => {
    const defaultProps = {
      name: 'Name',
      itemWidth: 10,
      items: [],
      marginBetween: 10,
      id: 'fake id',
    };
    const { getByText, container } = render(<ArtPreview {...defaultProps} {...overrideProps} />);

    return { getByText, container };
  };

  it('renders the component', () => {
    const { container } = renderArtPreview();

    expect(container).toBeInTheDocument();
  });

  it('renders the name', () => {
    const name = 'name!';
    const { getByText } = renderArtPreview({ name });

    expect(getByText(name)).toBeInTheDocument();
  });

  it('renders the board preview', () => {
    const color = 'black';
    const items = Array(1).fill(Array(5).fill(color));
    const { container } = renderArtPreview({ items });

    expect(container.querySelector('li')).toHaveStyle(`background-color: ${color};`);
  });

  it('renders colors info', () => {
    const color = 'red';
    const secondColor = 'blue';
    const items = [[color, secondColor, secondColor]];
    const { getByText } = renderArtPreview({ items });

    expect(getByText('1')).toHaveStyle(`background-color: ${color};`);
    expect(getByText('2')).toHaveStyle(`background-color: ${secondColor};`);
  });
});
