import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../../model/items.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item | undefined;
  @Output() addToCartEventEmitter = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(item: Item | undefined): void {
    this.addToCartEventEmitter.emit(item);
  }
}
