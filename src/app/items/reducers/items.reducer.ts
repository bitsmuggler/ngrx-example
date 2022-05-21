import { createReducer, on } from '@ngrx/store';
import {itemsLoadedSuccessfully} from "../actions/items-api.actions";
import {ItemsFeatureState} from "./items.selector";

export const initialState: ItemsFeatureState = {
  items: []
};

export const itemsReducer = createReducer(
  initialState,
  on(itemsLoadedSuccessfully, (store, result) => {
    return {
      ...store,
      items: result.data
    }
  })
);
