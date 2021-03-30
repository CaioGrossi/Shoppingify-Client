import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBar from '.';

describe('<SearchBar />', () => {
  it('should render correctly', () => {
    const searchMock = jest.fn();

    render(<SearchBar onChange={searchMock} />);

    expect(screen.getByPlaceholderText(/search item/i)).toBeInTheDocument();

    expect(screen.getByTestId('svg-search')).toBeInTheDocument();
  });

  it('should call onChange function whlie typing', async () => {
    const onChange = jest.fn();

    render(<SearchBar onChange={onChange} />);

    const input = screen.getByPlaceholderText(/search item/i);
    const text = 'banana';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onChange).toHaveBeenCalledTimes(text.length);
    });

    expect(onChange).toHaveBeenCalledWith(text);
  });
});
