import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextField from '.';

const props = {
  name: 'Food',
  label: 'Food',
  placeholder: 'Enter a name of a food'
};

describe('<TextField />', () => {
  it('should correctly', () => {
    const inputChangeMock = jest.fn();
    render(<TextField {...props} onInputChange={inputChangeMock} />);

    expect(screen.getByLabelText(/food/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /food/i })).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/enter a name of a food/i)
    ).toBeInTheDocument();
  });

  it('should change the input value and call onInputChange function', async () => {
    const inputChangeMock = jest.fn();
    render(<TextField {...props} onInputChange={inputChangeMock} />);

    const input = screen.getByRole('textbox');
    const text = 'Banana';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(inputChangeMock).toHaveBeenCalledTimes(text.length);
    });

    expect(inputChangeMock).toHaveBeenCalledWith(text);
  });
});
