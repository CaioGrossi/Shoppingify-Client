import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import OptionTag from '.';

import { optionMock } from './mock';

const selectMock = jest.fn();

describe('<OptionTag />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <OptionTag {...optionMock} onSelect={selectMock} />
    );

    expect(screen.getByText(/fish/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 22rem;
        color: #34333a;
        background-color: white;
        font-size: 1.8rem;
        padding: 1rem;
        border-radius: 12px;
        cursor: pointer;
      }

      .c0:hover {
        background-color: #f2f2f2;
      }

      <div
        class="c0"
      >
        <span>
          fish
        </span>
      </div>
    `);
  });

  it('should call onSelect function passing id and name when clicled', () => {
    const selectMock = jest.fn();
    render(<OptionTag {...optionMock} onSelect={selectMock} />);

    userEvent.click(screen.getByText(/fish/i));

    expect(selectMock).toHaveBeenCalledWith('1', 'fish');
  });
});
