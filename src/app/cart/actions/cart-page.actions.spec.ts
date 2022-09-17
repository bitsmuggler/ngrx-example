import {CartPageActions} from "./cart-page.actions";

describe('cart page actions', () => {
  it('should return removeFromCart action', () => {
    expect(CartPageActions.removeItemFromCart.type).toBe('[Cart/Page] Remove item from cart');
  });

  it('should return removeFromCart action', () => {
    expect(CartPageActions.increaseNumberOfItemInCart.type).toBe('[Cart/Page] Increase number of item in cart');
  });

  it('should returnreduceNumberOfItemInCart action', () => {
    expect(CartPageActions.reduceNumberOfItemInCart.type).toBe('[Cart/Page] Reduce number of item in cart');
  });
});
