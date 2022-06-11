import * as fromCartPage from './cart-page.actions';

describe('loadCartPages', () => {
  it('should return an action', () => {
    expect(fromCartPage.removeFromCart.type).toBe('[Cart/Page] Remove item from cart');
  });
});
