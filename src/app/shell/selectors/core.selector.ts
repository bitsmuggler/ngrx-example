import {createSelector, createFeatureSelector} from '@ngrx/store';
import {CartFeatureState} from "../../cart/reducers/cart.selector";


export interface ShellState {
  cartOpen: boolean;
}

export const selectShellState = (state: ShellState) => state;
export const selectCartOpen = createSelector(
  selectShellState,
  (state: ShellState) => ({
    cartOpen: state.cartOpen
  })
);

export const selectCartFeature = createFeatureSelector<CartFeatureState>('cartFeature');

export const selectNumberOfCartItems = createSelector(
  selectCartFeature,
  (state: CartFeatureState) => state.numberOfItems
);
