import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {addToCart} from "../../catalog/actions/items-page.actions";
import {itemAddedSuccess} from "../actions/cart-api.actions";

@Injectable()
export class CartEffect {

  addItemToCart$ = createEffect(() => this.actions$.pipe(
      ofType(addToCart),
      // Call Server via service here
      map(_ => (itemAddedSuccess()))
    )
  );

  constructor(
    private actions$: Actions,
  ) {
  }
}
