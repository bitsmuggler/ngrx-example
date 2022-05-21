import { Component, OnInit } from '@angular/core';
import {CartFeatureState, selectCartItems} from "../../reducers/cart.selector";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {CartItem} from "../../model/cart-item.model";
import {reduceItemFromCart, removeFromCart} from "../../actions/cart-page.actions";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;

  constructor(private store: Store<CartFeatureState>) {
    this.cartItems$ = this.store.select(selectCartItems);
  }

  ngOnInit(): void {
  }

  reduceItem(item: CartItem) {
    console.log('dispatch');
    this.store.dispatch(reduceItemFromCart({cartItem: item}))
  }

  removeItem(item: CartItem) {
    this.store.dispatch(removeFromCart({cartItem: item}));
  }
}
