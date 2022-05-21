import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {addToCart, getItems} from "../../actions/items-page.actions";
import {ItemsFeatureState, selectItems} from "../../reducers/items.selector";
import {Item} from "../../model/items.model";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

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
