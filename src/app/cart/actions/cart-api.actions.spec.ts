import * as cartApi from "./cart-api.actions";

describe('cart api actions', () => {
  it('should return itemAddedSuccess action', () => {
    expect(cartApi.itemAddedSuccess.type).toBe('[Cart/API] Item added to cart successfully');
  });
});
