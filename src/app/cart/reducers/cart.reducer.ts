import {createReducer, on} from '@ngrx/store';
import {CartFeatureState} from "./cart.selector";
import {v4 as uuidv4} from 'uuid';
import {addToCart} from "../../items/actions/items-page.actions";
import {CartItem} from "../model/cart-item.model";
import {increaseItemInCart, reduceItemFromCart} from "../actions/cart-page.actions";

export const initialState: CartFeatureState = {
  cartItems: []
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (store: CartFeatureState, result) => {

      const existingItem = store.cartItems.find(item => item.item.id === result.item.id);
      const cartItem = {
        id: uuidv4(),
        numberOfItems: existingItem ? Number(existingItem.numberOfItems) + 1 : 1,
        totalPrice: existingItem ? Number(existingItem.totalPrice) + Number(result.item.price) : Number(result.item.price),
        item: result.item
      } as CartItem;

      return {
        cartItems: [...store.cartItems.filter(item => item.item.id !== result.item.id), cartItem]
      }
    }
  ),
  on(reduceItemFromCart, (store: CartFeatureState, result) => {
    const existingItem = store.cartItems.find(item => item.id === result.cartItem.id);
    if (existingItem && existingItem.numberOfItems === 1) {
      return {
        cartItems: store.cartItems.filter(item => item.id !== result.cartItem.id)
      }
    }

    const cartItem = {
      id: uuidv4(),
      numberOfItems: existingItem ? existingItem.numberOfItems - 1 : 1,
      totalPrice: existingItem ? existingItem.totalPrice - result.cartItem.item.price : result.cartItem.item.price,
      item: result.cartItem.item
    } as CartItem;

    return {
      cartItems: [...store.cartItems.filter(item => item.id !== result.cartItem.id), cartItem]
    }
  }),
  on(increaseItemInCart, (store: CartFeatureState, result) => {
    const existingItem = store.cartItems.find(item => item.id === result.cartItem.id);

    const cartItem = {
      id: uuidv4(),
      numberOfItems: existingItem ? existingItem.numberOfItems + 1 : 1,
      totalPrice: existingItem ? Number(existingItem.totalPrice) + Number(result.cartItem.item.price) : Number(result.cartItem.item.price),
      item: result.cartItem.item
    } as CartItem;

    return {
      cartItems: [...store.cartItems.filter(item => item.id !== result.cartItem.id), cartItem]
    }
  }),
);
