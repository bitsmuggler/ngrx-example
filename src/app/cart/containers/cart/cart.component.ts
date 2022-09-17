import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartFeatureState, selectCartItems, selectCartTotalPrice} from "../../reducers/cart.selector";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {CartItem} from "../../model/cart-item.model";
import {CartPageActions} from "../../actions/cart-page.actions";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems$: Observable<CartItem[]>;
  totalPrice$: Observable<number>;

  @Input()
  cartItem: CartItem | undefined;

  @Output()
  closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  id = 'id';

  constructor(private store: Store<CartFeatureState>) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.totalPrice$ = this.store.select(selectCartTotalPrice);
  }

  reduceItem(cartItem: CartItem) {
    this.store.dispatch(CartPageActions.reduceNumberOfItemInCart({cartItem}))
  }

  removeItem(cartItem: CartItem) {
    this.store.dispatch(CartPageActions.removeItemFromCart({cartItem}));
  }

  increaseItem(cartItem: CartItem) {
    this.store.dispatch(CartPageActions.increaseNumberOfItemInCart({cartItem}));
  }

  closeCart() {
    this.closeEvent.emit(true);
  }
}
