import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { ToastContainer } from 'react-toastify';
import 'server.mock';

import ItemForm from '.';

describe('<ItemForm />', () => {
  it('should render correctly', async () => {
    const onComplete = jest.fn();
    await act(async () => {
      render(<ItemForm onCompleted={onComplete} />);
    });

    expect(screen.getByPlaceholderText(/enter a name/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/enter a category/i)
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
  });

  it('should display error message when tries to add a item that already exists', async () => {
    const onComplete = jest.fn();

    await act(async () => {
      render(
        <div>
          <ToastContainer />
          <ItemForm onCompleted={onComplete} />
        </div>
      );
    });

    userEvent.type(
      screen.getByPlaceholderText(/enter a name/i),
      'already exists'
    );

    userEvent.type(screen.getByPlaceholderText(/enter a category/i), 'f');

    userEvent.click(await screen.findByText('fruits'));

    userEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(
      await screen.findByText(/A item with this name already exists!/i)
    ).toBeInTheDocument();
  });

  it('should call onComplete function when tries to add a item with a name that doesn`t exists', async () => {
    const onComplete = jest.fn();

    await act(async () => {
      render(
        <div>
          <ToastContainer />
          <ItemForm onCompleted={onComplete} />
        </div>
      );
    });

    userEvent.type(screen.getByPlaceholderText(/enter a name/i), 'dont exists');

    userEvent.type(screen.getByPlaceholderText(/enter a category/i), 'f');

    userEvent.click(await screen.findByText('fruits'));

    userEvent.click(screen.getByRole('button', { name: /save/i }));

    waitFor(() => {
      expect(onComplete).toHaveBeenCalledWith(true);
    });
  });

  it('should call onComplete function when cancel button is clicked', async () => {
    const onComplete = jest.fn();

    await act(async () => {
      render(
        <div>
          <ToastContainer />
          <ItemForm onCompleted={onComplete} />
        </div>
      );
    });

    userEvent.click(screen.getByRole('button', { name: 'cancel' }));

    waitFor(() => {
      expect(onComplete).toHaveBeenCalledWith(true);
    });
  });
});
