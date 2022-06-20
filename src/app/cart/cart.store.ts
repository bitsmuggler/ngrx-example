import { Injectable } from '@angular/core';
import { AdaptCommon, Source } from '@state-adapt/core';
import { Item } from '../catalog/model/catalog.model';
import { cartAdapter, cartInitialState } from './cart.adapter';

@Injectable({ providedIn: 'root' })
export class CartStore {
  addItemToCart$ = new Source<Item>('[Cart] addItemToCart$');
  removeItemFromCart$ = new Source<Item>('[Cart] removeItemFromCart$');
  decreaseItemInCart$ = new Source<Item>('[Cart] decreaseItemInCart$');
  increaseItemInCart$ = new Source<Item>('[Cart] increaseItemInCart$');

  store = this.adapt.init(['cart', cartAdapter, cartInitialState], {
    addItem: this.addItemToCart$,
    removeItem: this.removeItemFromCart$,
    reduceItemFromCart: this.decreaseItemInCart$,
    increaseItemInCart: this.increaseItemInCart$,
  });

  cartItems$ = this.store.cartItems$;
  totalPrice$ = this.store.totalPrice$;
  numberOfItems$ = this.store.numberOfItems$;

  constructor(private adapt: AdaptCommon) {}
}
