import { createAdapter, createSelectors } from '@state-adapt/core';
import { Item } from '../catalog/model/catalog.model';
import { CartItem } from './model/cart-item.model';

export interface CartFeatureState {
  cartItems: CartItem[];
}

export const cartInitialState: CartFeatureState = {
  cartItems: [],
};

const selectors = createSelectors<CartFeatureState>()(
  {
    cartItems: (s) =>
      s.cartItems.map((item) => ({
        ...item,
        totalPrice: item.numberOfItems * item.price,
      })),
  },
  {
    totalPrice: (s) =>
      s.cartItems.reduce(
        (partialSum, cartItem) => Number(partialSum) + cartItem.totalPrice,
        0
      ),
    numberOfItems: (s) =>
      s.cartItems.reduce(
        (partialSum, cartItem) => Number(partialSum) + cartItem.numberOfItems,
        0
      ),
  }
);

export const cartAdapter = createAdapter<CartFeatureState>()({
  addItem: (state, item: Item) => {
    const existingItem = state.cartItems.find(({ id }) => id === item.id);
    return {
      ...state,
      cartItems: state.cartItems
        .map((cartItem) =>
          cartItem.id !== item.id
            ? cartItem
            : { ...cartItem, numberOfItems: cartItem.numberOfItems + 1 }
        )
        .concat(existingItem ? [] : [{ ...item, numberOfItems: 1 }]),
    };
  },
  removeItem: (state, item: Item) => ({
    ...state,
    cartItems: state.cartItems.filter((cartItem) => cartItem.id !== item.id),
  }),
  reduceItemFromCart: (state, item: Item) => ({
    ...state,
    cartItems: state.cartItems
      .map((cartItem) =>
        cartItem.id !== item.id
          ? cartItem
          : { ...cartItem, numberOfItems: cartItem.numberOfItems - 1 }
      )
      .filter((cartItem) => !!cartItem.numberOfItems),
  }),
  increaseItemInCart: (state, item: Item) => ({
    ...state,
    cartItems: state.cartItems.map((cartItem) =>
      cartItem.id !== item.id
        ? cartItem
        : { ...cartItem, numberOfItems: cartItem.numberOfItems + 1 }
    ),
  }),
  selectors,
});
