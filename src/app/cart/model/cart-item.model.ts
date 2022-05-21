import {Item} from "../../items/model/items.model";

export interface CartItem {
  id: string;
  numberOfItems: number;
  totalPrice: number;
  item: Item;
}
