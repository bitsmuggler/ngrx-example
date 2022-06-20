import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartFeatureState } from '../../cart/reducers/cart.selector';

export const selectCartFeature =
  createFeatureSelector<CartFeatureState>('cartFeature');

export const selectNumberOfCartItems = createSelector(
  selectCartFeature,
  (state: CartFeatureState) => state.numberOfItems
);
