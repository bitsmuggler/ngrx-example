import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartStore } from '../../cart.store';
import { CartItem } from '../../model/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  increaseItemInCart$ = this.cartStore.increaseItemInCart$;
  removeItemFromCart$ = this.cartStore.removeItemFromCart$;
  decreaseItemInCart$ = this.cartStore.decreaseItemInCart$;

  cartItems$ = this.cartStore.cartItems$;
  totalPrice$ = this.cartStore.totalPrice$;

  @Input()
  cartItem: CartItem | undefined;

  @Output()
  closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  id = 'id';

  constructor(private cartStore: CartStore) {}

  closeCart() {
    this.closeEvent.emit(true);
  }
}
