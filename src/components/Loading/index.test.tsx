import React from 'react';
import { render } from '@testing-library/react';

import Loading from '.';

describe('<Loading />', () => {
  const renderLoading = () => {
    const { container, getByText, getByTestId } = render(<Loading />);

    return { container, getByText, getByTestId };
  };

  it('renders the component', () => {
    const { container } = renderLoading();

    expect(container).toBeInTheDocument();
  });
});
