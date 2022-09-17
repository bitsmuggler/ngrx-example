import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartItem} from "../../model/cart-item.model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() cartItem: any | undefined;
  @Output() increaseItemInCartEvent = new EventEmitter<CartItem>();
  @Output() reduceItemInCartEvent = new EventEmitter<CartItem>();
  @Output() removeItemInCartEvent = new EventEmitter<CartItem>();

  reduceItemInCart() {
    this.reduceItemInCartEvent.emit(this.cartItem);
  }

  removeItemFromCart() {
    this.removeItemInCartEvent.emit(this.cartItem);
  }

  increaseItemInCart() {
    this.increaseItemInCartEvent.emit(this.cartItem);
  }
}
