import {createReducer, on} from '@ngrx/store';
import {CartFeatureState} from "./cart.selector";
import {v4 as uuidv4} from 'uuid';
import {addToCart} from "../../catalog/actions/items-page.actions";
import {CartItem} from "../model/cart-item.model";
import {increaseItemInCart, reduceItemFromCart, removeFromCart} from "../actions/cart-page.actions";

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

      const existingItem = store.cartItems.find(item => item.item.id === result.item.id);
      const cartItem = {
        id: uuidv4(),
        numberOfItems: existingItem ? existingItem.numberOfItems + 1 : 1,
        totalPrice: existingItem ? existingItem.totalPrice + result.item.price : result.item.price,
        item: result.item
      } as CartItem;

      const cartItems = [...store.cartItems.filter(item => item.item.id !== result.item.id), cartItem];

      return {
        cartItems,
        totalPrice: getTotalPrice(cartItems),
        numberOfItems: getNumberOfItems(cartItems)
      }
    }

    
  ),
  on(reduceItemFromCart, (store: CartFeatureState, result) => {
    const existingItem = store.cartItems.find(item => item.id === result.cartItem.id);
    if (existingItem && existingItem.numberOfItems === 1) {
      const cartItems = store.cartItems.filter(item => item.id !== result.cartItem.id)
      return {
        cartItems,
        totalPrice: getTotalPrice(cartItems),
        numberOfItems: getNumberOfItems(cartItems)
      }
    }

    const cartItem = {
      id: uuidv4(),
      numberOfItems: existingItem ? existingItem.numberOfItems - 1 : 1,
      totalPrice: existingItem ? existingItem.totalPrice - result.cartItem.item.price : result.cartItem.item.price,
      item: result.cartItem.item
    } as CartItem;

    const cartItems = [...store.cartItems.filter(item => item.id !== result.cartItem.id), cartItem];
    return {
      cartItems,
      totalPrice: getTotalPrice(cartItems),
      numberOfItems: getNumberOfItems(cartItems)
    }
  }),
  on(increaseItemInCart, (store: CartFeatureState, result) => {
    const existingItem = store.cartItems.find(item => item.id === result.cartItem.id);

    const cartItem = {
      id: uuidv4(),
      numberOfItems: existingItem ? existingItem.numberOfItems + 1 : 1,
      totalPrice: existingItem ? existingItem.totalPrice + result.cartItem.item.price : result.cartItem.item.price,
      item: result.cartItem.item
    } as CartItem;

    const cartItems = [...store.cartItems.filter(item => item.id !== result.cartItem.id), cartItem];

    return {
      cartItems,
      totalPrice: getTotalPrice(cartItems),
      numberOfItems: getNumberOfItems(cartItems)
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
