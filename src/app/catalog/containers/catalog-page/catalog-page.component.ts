import { Component, EventEmitter, Output } from '@angular/core';
import { CartStore } from 'src/app/cart/cart.store';
import { CatalogStore } from '../../catalog.store';
import { Item } from '../../model/catalog.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
})
export class CatalogPageComponent {
  @Output()
  itemAddedEvent = new EventEmitter<Item>();

  items$ = this.catalogStore.store.items$;

  constructor(
    private catalogStore: CatalogStore,
    private cartStore: CartStore
  ) {}

  addItemToCart(item: Item) {
    this.cartStore.addItemToCart$.next(item);
    this.itemAddedEvent.emit(item);
  }
}
