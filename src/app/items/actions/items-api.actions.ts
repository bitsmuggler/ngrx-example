import {createAction, props} from '@ngrx/store';
import {Item} from "../model/items.model";

export const itemsLoadedSuccessfully = createAction(
  '[Items API] Items loaded',
  props<{ data: Item[] }>()
);
