import {Item} from "../../catalog/model/catalog.model";

export interface CartItem {
  id: string;
  numberOfItems: number;
  item: Item;
}