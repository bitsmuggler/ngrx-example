import {createSelector} from '@ngrx/store';
import {Item} from "../model/catalog.model";

export interface ItemsFeatureState {
  items: Item[]
}

export const selectItemsState = (state: ItemsFeatureState) => state;

export const selectItems = createSelector(
  selectItemsState,
  (state: any | undefined) => {
    return state?.itemsFeature?.items;
  }
);
