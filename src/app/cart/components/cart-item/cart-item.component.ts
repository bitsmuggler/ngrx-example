import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from "../../model/cart-item.model";
import {reduceItemFromCart} from "../../actions/cart-page.actions";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem | undefined;
  @Output() reduceItemFromCartEvent = new EventEmitter<CartItem>();
  @Output() removeItemFromCartEvent = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit(): void {

  }

  reduceItemFromCart() {
    this.reduceItemFromCartEvent.emit(this.cartItem);
  }

  removeItemFromCart() {
    this.removeItemFromCartEvent.emit(this.cartItem);
  }
}
