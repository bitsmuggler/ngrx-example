import * as fromCartPage from './cart-page.actions';

describe('cart page actions', () => {
  it('should return removeFromCart action', () => {
    expect(fromCartPage.removeFromCart.type).toBe('[Cart/Page] Remove item from cart');
  });

  it('should return removeFromCart action', () => {
    expect(fromCartPage.increaseItemInCart.type).toBe('[Cart/Page] Increase number of item in cart');
  });

  it('should return removeFromCart action', () => {
    expect(fromCartPage.reduceItemFromCart.type).toBe('[Cart/Page] Reduce number of item in cart');
  });
});
