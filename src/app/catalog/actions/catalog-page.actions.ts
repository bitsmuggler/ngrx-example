import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Item} from "../model/catalog.model";

export const CatalogPageActions = createActionGroup({
  source: 'Items/Page',
  events: {
    'Get Items': emptyProps(),
    'Add item to cart': props<{ item: Item }>(),
    'Open Cart': emptyProps()
  }
});
