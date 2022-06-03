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
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {NgPipesModule} from "ngx-pipes";
import {EffectsModule} from "@ngrx/effects";
import {CartEffect} from "./effects/cart.effect";


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
    EffectsModule.forFeature([CartEffect]),
    StoreModule.forFeature('cartFeature', cartReducer),
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgPipesModule
  ]
})
export class CartModule {
}
