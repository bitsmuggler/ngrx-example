import { createReducer, on } from '@ngrx/store';
import {itemsLoadedSuccess} from "../actions/catalog-api.actions";
import {ItemsFeatureState} from "./catalog.selector";

export const initialState: ItemsFeatureState = {
  items: []
};

export const catalogReducer = createReducer(
  initialState,
  on(itemsLoadedSuccess, (store, result) => {
    return {
      ...store,
      items: result.data
    }
  })
);
