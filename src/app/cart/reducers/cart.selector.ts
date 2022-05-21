import { createSelector } from '@ngrx/store';
import {CartItem} from "../model/cart-item.model";

export interface CartFeatureState {
  cartItems: CartItem[]
}

export const selectCartState = (state: CartFeatureState) => state;

export const selectCartItems = createSelector(
  selectCartState,
  (state: any | undefined) => {
    return state?.cartFeature?.cartItems;
  }
);
