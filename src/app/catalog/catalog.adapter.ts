import { createAdapter } from '@state-adapt/core';
import { Item } from './model/catalog.model';

export interface ItemsFeatureState {
  items: Item[];
}

export const catalogInitialState: ItemsFeatureState = {
  items: [],
};

export const catalogAdapter = createAdapter<ItemsFeatureState>()({
  receiveItems: (state, items: Item[]) => ({ ...state, items }),
  selectors: {
    items: (state) => state.items,
  },
});
