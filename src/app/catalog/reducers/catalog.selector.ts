import { createSelector } from '@ngrx/store';
import { Item } from "../model/catalog.model";

export interface ItemsFeatureState {
  items: Item[]
}

export const selectItemsState = (state: any) => state.itemsFeature;

export const selectItems = createSelector(
  selectItemsState,
  (state: ItemsFeatureState | undefined) => {
    return state?.items;
  }
);
