import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './containers/cart/cart.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {StoreModule} from "@ngrx/store";
import {MatCardModule} from "@angular/material/card";
import {cartReducer} from "./reducers/cart.reducer";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('cartFeature', cartReducer),
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class CartModule {
}
