import { render, screen } from '@testing-library/react';

import { dataListMock } from './mock';
import DatalistField from '.';
import userEvent from '@testing-library/user-event';

const onChangeMock = jest.fn();

describe('<DataListField />', () => {
  it('should render the text field', () => {
    render(<DatalistField {...dataListMock} onChange={onChangeMock} />);

    expect(
      screen.getByPlaceholderText(/enter a category/i)
    ).toBeInTheDocument();
  });

  it('should show categories when text input is onFocus', () => {
    render(<DatalistField {...dataListMock} onChange={onChangeMock} />);

    userEvent.click(screen.getByPlaceholderText(/enter a category/i));

    expect(screen.getAllByText(/fish/i)).toHaveLength(3);
    expect(screen.getAllByText(/fruits/i)).toHaveLength(2);
    expect(screen.getByText(/breads/i)).toBeInTheDocument();
  });

  it('should show only categories with "fish" when "fish" is typed (filter)', () => {
    render(<DatalistField {...dataListMock} onChange={onChangeMock} />);

    userEvent.type(screen.getByPlaceholderText(/enter a category/i), 'fish');
    expect(screen.getAllByText(/fish/i)).toHaveLength(3);
    expect(screen.queryAllByAltText(/fruits/i)).not.toHaveLength(2);
    expect(screen.queryByText(/breads/i)).not.toBeInTheDocument();
  });

  it('should call onChange function when one option is clicked when hide categories', () => {
    render(<DatalistField {...dataListMock} onChange={onChangeMock} />);

    userEvent.click(screen.getByPlaceholderText(/enter a category/i));
    userEvent.click(screen.getByText(/cold fish/i));

    expect(onChangeMock).toHaveBeenCalledWith('3');

    expect(screen.queryAllByAltText(/fish/i)).not.toHaveLength(3);
    expect(screen.queryAllByAltText(/fruits/i)).not.toHaveLength(2);
    expect(screen.queryByText(/breads/i)).not.toBeInTheDocument();
  });
});
