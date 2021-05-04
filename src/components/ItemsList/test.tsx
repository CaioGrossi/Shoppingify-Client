import { render, screen } from '@testing-library/react';
import { itemsSectionMock } from './mock';
import ItemsList from '.';

describe('<ItemsList />', () => {
  it('should list correct the itemsSections', () => {
    render(<ItemsList itemsSections={itemsSectionMock} />);

    // headings
    expect(screen.getByRole('heading', { name: /derivados vaca/i }));
    expect(screen.getByRole('heading', { name: /limpeza/i }));

    // items
    expect(screen.getAllByText(/leite/i)).toHaveLength(7);
    expect(screen.getAllByText(/limpador/i)).toHaveLength(7);
  });
});
