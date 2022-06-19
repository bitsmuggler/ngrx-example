import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../model/catalog.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: []
})
export class ItemComponent {

  @Input() item: Item | undefined;
  @Output() addToCartEventEmitter = new EventEmitter<Item>();

  addToCart(item: Item | undefined): void {
    this.addToCartEventEmitter.emit(item);
  }
}
