import { createAction, props } from '@ngrx/store';
import {CartItem} from "../model/cart-item.model";

export const reduceItemFromCart = createAction(
  '[Cart/Page] Reduce number of item from cart',
  props<{ cartItem: CartItem }>()
);


export const removeFromCart = createAction(
  '[Cart/Page] Remove item from cart',
  props<{ cartItem: CartItem }>()
);
