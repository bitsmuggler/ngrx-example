import { cartReducer, initialState } from './cart.reducer';
import {Item} from "../../catalog/model/catalog.model";
import {CartItem} from "../model/cart-item.model";
import {CartFeatureState} from "./cart.selector";
import {CatalogPageActions} from "../../catalog/actions/catalog-page.actions";

describe('Cart Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = cartReducer(initialState, action);
      expect(result).toBe(initialState);
    });

  });

  describe('addToCart',  () => {
    const itemId = 'i-x';
    const item = {id: itemId,  price: 10} as Item;
    const action = CatalogPageActions.addItemToCart({item: item});

    describe('with an empty cart', () => {
      const result = cartReducer(initialState, action);

      it('should increment the number of items in the cart', () => {
        expect(result.numberOfItems).toEqual(1);
      });

      it('should add the catalog item as cart item', () => {
        const cartItem = result.cartItems[0];
        expect(cartItem).toEqual(jasmine.objectContaining({
          item: item
        } as CartItem))
      });
    });

    describe('with some items in the cart', () => {
      const state = {
        cartItems: [
          {
            id: 'c-1',
            item: {
              id: 'i-1',
              price: 8
            } as Item,
            numberOfItems: 1
          },
          {
            id: 'c-2',
            item: {
              id: 'i-2',
              price: 2
            } as Item,
            numberOfItems: 2
          }
        ] as CartItem[],
        totalPrice: 12,
        numberOfItems: 2
      } as CartFeatureState;

      let result = cartReducer(state, action);

      it('another addToCart should increase the numberOfItems and the totalPrice', () => {
        result = cartReducer(result, action);
        const selectedCartItem = result.cartItems.find(cartItem => cartItem.item.id === itemId);
        expect(selectedCartItem?.numberOfItems).toBe(2);
      });
    })
  });
});
