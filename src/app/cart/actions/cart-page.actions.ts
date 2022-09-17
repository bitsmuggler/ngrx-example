import {createActionGroup, props} from '@ngrx/store';
import {CartItem} from "../model/cart-item.model";

export const CartPageActions = createActionGroup({
  source: 'Cart/Page',
  events: {
    'Reduce number of item in cart': props<{ cartItem: CartItem }>(),
    'Increase number of item in cart': props<{cartItem: CartItem}>(),
    'Remove item from cart': props<{ cartItem: CartItem }>()
  }
})
