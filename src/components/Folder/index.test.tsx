import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Folder from '.';

describe('<Folder />', () => {
  const renderFolder = (overrideProps = {}) => {
    const defaultProps = {
      name: 'name',
      children: 'i am the children',
      onEdit: jest.fn(),
      onDelete: jest.fn(),
      id: 'my id'
    };

    const { container, getByText, getByTestId } = render(<Folder {...defaultProps} {...overrideProps} />);

    return { container, getByText, getByTestId };
  };

  it('renders the component', () => {
    const { container } = renderFolder();

    expect(container).toBeInTheDocument();
  });

  it('renders the name', () => {
    const name = 'i am the name';
    const { getByText } = renderFolder({ name });

    expect(getByText(name)).toBeInTheDocument();
  });

  it('renders the children', () => {
    const children = 'i am the children';
    const { getByText } = renderFolder({ children });

    expect(getByText(children)).toBeInTheDocument();
  });

  it('calls onEdit', () => {
    global.window.prompt = jest.fn();

    const onEdit = jest.fn();
    const { getByTestId } = renderFolder({ onEdit });

    fireEvent.click(getByTestId('edit-folder'));

    expect(onEdit).toHaveBeenCalled();
  });

  it('calls onDelete', () => {
    global.window.confirm = jest.fn().mockReturnValue(true);

    const onDelete = jest.fn();
    const { getByTestId } = renderFolder({ onDelete });

    fireEvent.click(getByTestId('delete-folder'));

    expect(onDelete).toHaveBeenCalled();
  });

  it('should not call onDelete', () => {
    global.window.confirm = jest.fn().mockReturnValue(false);

    const onDelete = jest.fn();
    const { getByTestId } = renderFolder({ onDelete });

    fireEvent.click(getByTestId('delete-folder'));

    expect(onDelete).not.toHaveBeenCalled();
  });
});
