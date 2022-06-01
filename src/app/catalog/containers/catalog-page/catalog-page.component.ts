import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {addToCart, getItems} from "../../actions/items-page.actions";
import {ItemsFeatureState, selectItems} from "../../reducers/catalog.selector";
import {Item} from "../../model/catalog.model";

@Component({
  selector: 'app-item-list',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  items$ = this.store.select(selectItems);

  constructor(private readonly store: Store<ItemsFeatureState>) {
    this.store.dispatch(getItems());
    this.items$.subscribe(n => {
      console.log(n);
    });
  }

  ngOnInit(): void {
  }

  addItemToCart(item: Item) {
    this.store.dispatch(addToCart({item}));
  }
}
