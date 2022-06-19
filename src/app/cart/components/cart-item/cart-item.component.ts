import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() cartItem: any | undefined;
  @Output() increaseItemInCartEvent = new EventEmitter<any>();
  @Output() reduceItemInCartEvent = new EventEmitter<any>();
  @Output() removeItemInCartEvent = new EventEmitter<any>();

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
