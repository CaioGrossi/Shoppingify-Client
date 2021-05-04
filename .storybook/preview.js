import { addDecorator } from '@storybook/react';
import { withNextRouter } from 'storybook-addon-next-router';
import {
  ShoppingListContextDefaultValues,
  ShoppingListContext
} from '../src/hooks/use-shoppinglist';
import GlobalStyles from '../src/styles/global';

addDecorator(withNextRouter());

export const decorators = [
  (Story, context) => (
    <ShoppingListContext.Provider
      value={{
        ...ShoppingListContextDefaultValues,
        ...(context?.args?.shoppinglistContextValue || {}),
        ...context.args
      }}
    >
      <GlobalStyles />
      <Story />
    </ShoppingListContext.Provider>
  )
];
