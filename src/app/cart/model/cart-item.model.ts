import { Item } from '../../catalog/model/catalog.model';

export interface CartItem extends Item {
  numberOfItems: number;
}
