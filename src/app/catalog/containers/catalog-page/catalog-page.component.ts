import {Component, EventEmitter, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {ItemsFeatureState, selectItems} from "../../reducers/catalog.selector";
import {Item} from "../../model/catalog.model";
import {CatalogPageActions} from "../../actions/catalog-page.actions";

@Component({
  selector: 'app-item-list',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent {

  @Output()
  itemAddedEvent = new EventEmitter<Item>();

  items$ = this.store.select(selectItems);

  constructor(private readonly store: Store<ItemsFeatureState>) {
    this.store.dispatch(CatalogPageActions.getItems());
  }

  addItemToCart(item: Item) {
    this.store.dispatch(CatalogPageActions.addItemToCart({item}));
    this.itemAddedEvent.emit(item);
  }
}
