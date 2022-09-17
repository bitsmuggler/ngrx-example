import {createReducer, on} from '@ngrx/store';
import {ShellState} from "../selectors/core.selector";
import {CatalogPageActions} from "../../catalog/actions/catalog-page.actions";

export const initialState: ShellState = {
  cartOpen: false
};

export const shellReducer = createReducer(
  initialState,
  on(CatalogPageActions.openCart, () => ({
    cartOpen: true
  }))
);
