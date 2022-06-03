import {createAction, props} from '@ngrx/store';
import {Item} from "../model/catalog.model";

export const getItems = createAction(
  '[Items List] Get items');

export const addToCart = createAction(
  '[Items List] Add item to cart',
  props<{ item: Item }>()
);

export const openCart = createAction(
  '[Items List] Open Cart'
);
