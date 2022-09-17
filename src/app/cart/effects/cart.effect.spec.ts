import {Shallow} from "shallow-render";
import {CartModule} from "../cart.module";
import {CartEffect} from "./cart.effect";
import {provideMockActions} from "@ngrx/effects/testing";
import {ReplaySubject} from "rxjs";
import {Item} from "../../catalog/model/catalog.model";
import {itemAddedSuccess} from "../actions/cart-api.actions";
import {CatalogPageActions} from "../../catalog/actions/catalog-page.actions";

describe('CartEffects', () => {
  let shallow: Shallow<CartEffect>;
  let actions: ReplaySubject<any>;

  beforeEach(async () => {
    shallow = new Shallow(CartEffect, CartModule)
      .provide(CartEffect)
      .provideMock(provideMockActions(() => actions));
  });

  describe('addItemToCart$', () => {
    it('should emit itemAddedSuccess', () => {
      actions = new ReplaySubject<any>(1);

      const item = {} as Item;
      actions.next(CatalogPageActions.addItemToCart({item}));

      const {inject} = shallow.createService();

      const cartEffects = inject(CartEffect);
      cartEffects.addItemToCart$.subscribe(result => {
        expect(result).toEqual(itemAddedSuccess());
      })
    })
  });
});
