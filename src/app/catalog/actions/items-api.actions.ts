import {createAction, props} from '@ngrx/store';
import {Item} from "../model/catalog.model";

export const itemsLoadedSuccess = createAction(
  '[Items API] Items loaded',
  props<{ data: Item[] }>()
);
