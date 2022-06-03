import {createReducer, on} from '@ngrx/store';
import {openCart} from "../../catalog/actions/items-page.actions";
import {ShellState} from "../selectors/core.selector";

export const initialState: ShellState = {
  cartOpen: false
};

export const shellReducer = createReducer(
  initialState,
  on(openCart, (store: ShellState) => ({
    cartOpen: true
  }))
);
