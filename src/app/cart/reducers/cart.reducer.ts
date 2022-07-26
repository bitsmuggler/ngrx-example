import { createReducer, on } from '@ngrx/store';
import { CartFeatureState } from "./cart.selector";
import { v4 as uuidv4 } from 'uuid';
import { addToCart } from "../../catalog/actions/items-page.actions";
import { CartItem } from "../model/cart-item.model";
import { increaseItemInCart, reduceItemFromCart, removeFromCart } from "../actions/cart-page.actions";
import { Item } from 'src/app/catalog/model/catalog.model';

export const initialState: CartFeatureState = {
  cartItems: [],
  totalPrice: 0,
  numberOfItems: 0
};

const getTotalPrice = (cartItems: CartItem[]): number => {
  return cartItems.reduce((partialSum, cartItem) => partialSum + (cartItem.numberOfItems * cartItem.item.price), 0);
}

const getNumberOfItems = (cartItems: CartItem[]): number => {
  return cartItems.reduce((partialSum, cartItem) => partialSum + cartItem.numberOfItems, 0);
}

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (store: CartFeatureState, result) => {
    const existingItem = store.cartItems.find(({ id }) => id === result.item.id);

    return {
      ...store,
      cartItems: store.cartItems.map((cartItem) => cartItem.item.id !== result.item.id
        ? cartItem
        : { ...cartItem, numberOfItems: cartItem.numberOfItems + 1 }
      ).concat(existingItem ? [] : [{ id: result.item.id, numberOfItems: 1, item: result.item }]),
      numberOfItems: store.numberOfItems + 1
    }
  }
  ),
  on(reduceItemFromCart, (store: CartFeatureState, result) => {
    const cartItem = store.cartItems.find(({ id }) => id === result.cartItem.id);

    return {
      ...store,
      cartItems: store.cartItems.map((cartItem) => cartItem.id !== result.cartItem.id
        ? cartItem
        : { ...cartItem, numberOfItems: cartItem.numberOfItems - 1 }
      ).filter(({ numberOfItems }) => numberOfItems > 0),
      numberOfItems: store.numberOfItems - 1
    }
  }),
  on(increaseItemInCart, (store: CartFeatureState, result) => {
    const cartItem = store.cartItems.find(({ id }) => id === result.cartItem.id);

    return {
      ...store,
      cartItems: store.cartItems.map((cartItem) => cartItem.id !== result.cartItem.id
        ? cartItem
        : { ...cartItem, numberOfItems: cartItem.numberOfItems + 1 }
      ).filter(({ numberOfItems }) => numberOfItems > 0),
      numberOfItems: store.numberOfItems + 1
    }
  }),
  on(removeFromCart, (store: CartFeatureState, result) => {
    const cartItems = [...store.cartItems.filter(item => item.id !== result.cartItem.id)];
    return {
      cartItems,
      totalPrice: getTotalPrice(cartItems),
      numberOfItems: getNumberOfItems(cartItems)
    }
  }),
);
