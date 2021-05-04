import { render, RenderOptions } from '@testing-library/react';

import {
  ShoppingListContext,
  ShoppingListContextData,
  ShoppingListContextDefaultValues
} from 'hooks/use-shoppinglist';
import { ReactElement } from 'react';

type CustomRenderProps = {
  shoppinglistProviderProps?: ShoppingListContextData;
} & Omit<RenderOptions, 'queries'>;

const customRender = (
  ui: ReactElement,
  {
    shoppinglistProviderProps = ShoppingListContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <ShoppingListContext.Provider value={shoppinglistProviderProps}>
      {ui}
    </ShoppingListContext.Provider>,
    renderOptions
  );

export { customRender };
