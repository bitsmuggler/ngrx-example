import {CartComponent} from './cart.component';
import {Shallow} from "shallow-render";
import {CartModule} from "../../cart.module";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {initialState} from "../../reducers/cart.reducer";
import {selectCartItems, selectCartTotalPrice} from "../../reducers/cart.selector";
import {CartItem} from "../../model/cart-item.model";
import {CartItemComponent} from "../../components/cart-item/cart-item.component";
import {OrderByPipe} from "ngx-pipes";
import {CurrencyPipe} from "@angular/common";

describe('CartComponent', () => {
  let shallow: Shallow<CartComponent>;

  beforeEach(async () => {
    shallow = new Shallow<CartComponent>(CartComponent, CartModule).provideMock(provideMockStore({initialState}),);
  });

  it('should create', async () => {
    const {fixture} = await shallow.render();
    expect(fixture).toBeTruthy();
  });

  describe('cart', async () => {
    const selectedCartItems = [
      {id: '1', item: {name: 'c'}} as CartItem,
      {id: '2', item: {name: 'a'}} as CartItem,
      {id: '3', item: {name: 'b'}} as CartItem
    ];

    it(`should render ${selectedCartItems.length} CartItems`, async () => {
      const {inject, fixture, findComponent} = await shallow.dontMock(OrderByPipe).render();
      const mockStore = inject(MockStore);
      mockStore.overrideSelector(selectCartItems, selectedCartItems);
      mockStore.refreshState();
      fixture.detectChanges();

      expect(findComponent(CartItemComponent).length).toBe(3);
    });

    it('should order by name asc', async () => {
      const {inject, fixture, findComponent} = await shallow.dontMock(OrderByPipe).render();
      const mockStore = inject(MockStore);
      mockStore.overrideSelector(selectCartItems, selectedCartItems);
      mockStore.refreshState();
      fixture.detectChanges();

      const cartItems = findComponent(CartItemComponent).map(n => n.cartItem)
                                                        .map(n => n?.item)
                                                        .map(n => n?.name);

      expect(cartItems).toEqual(['a', 'b', 'c']);
    });

    it ('should show "empty cart" if there are not any CartItems', async () => {
      const {find, inject, fixture} = await shallow.dontMock(OrderByPipe).render();
      const mockStore = inject(MockStore);
      mockStore.overrideSelector(selectCartItems, []);
      mockStore.refreshState();
      fixture.detectChanges();

      expect(find('span')[0].nativeElement.innerText).toBe('Empty cart 🕵🏻');
    })
  });

  describe('totalprice', () => {
    it('should show formatted', async () => {
      const expectedTotalPrice = 1234.50;
      const {inject, fixture, find} = await shallow.dontMock(OrderByPipe).render();
      const mockStore = inject(MockStore);
      mockStore.overrideSelector(selectCartTotalPrice, expectedTotalPrice);
      mockStore.overrideSelector(selectCartItems, [{}, {}, {}]);
      mockStore.refreshState();
      fixture.detectChanges();
      const currencyPipe = new CurrencyPipe('en');

      expect(find('p')[0].nativeElement.innerText).toBe(`Total: ${currencyPipe.transform(expectedTotalPrice)}`);
    })
  });

  describe('close cart button', () => {

    it('should emit the close event', async () => {
      const {find, inject, fixture, instance} = await shallow.dontMock(OrderByPipe).render();
      const mockStore = inject(MockStore);
      mockStore.overrideSelector(selectCartItems, []);
      mockStore.refreshState();
      fixture.detectChanges();
      find('button')[0].nativeElement.click();
      expect(instance.closeEvent.emit).toHaveBeenCalled();
    })
  });
});
