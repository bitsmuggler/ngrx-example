import {CartItemComponent} from './cart-item.component';
import {Shallow} from "shallow-render";
import {CartModule} from "../../cart.module";
import {CartItem} from "../../model/cart-item.model";

describe('CartItemComponent', () => {
  let shallow: Shallow<CartItemComponent>;

  beforeEach(async () => {
    shallow = new Shallow<CartItemComponent>(CartItemComponent, CartModule);
  });

  it('should create', async () => {
    const {fixture} = await shallow.render({bind: {cartItem: {}}, whenStable: false});
    expect(fixture).toBeTruthy();
  });

  it('should emit reduceItemInCartEvent', async () => {
    const cartItem = {} as CartItem;
    const {instance} = await shallow.render({bind: {cartItem}});
    instance.reduceItemInCart();
    expect(instance.reduceItemInCartEvent.emit).toHaveBeenCalledWith(cartItem);
  });

  it('should emit increaseItemInCartEvent', async () => {
    const cartItem = {} as CartItem;
    const {instance} = await shallow.render({bind: {cartItem}});
    instance.increaseItemInCart();
    expect(instance.increaseItemInCartEvent.emit).toHaveBeenCalledWith(cartItem);
  });

  it('should emit removeItemFromCart', async () => {
    const cartItem = {} as CartItem;
    const {instance} = await shallow.render({bind: {cartItem}});
    instance.removeItemFromCart();
    expect(instance.removeItemInCartEvent.emit).toHaveBeenCalledWith(cartItem);
  })
});
