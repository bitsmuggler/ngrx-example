import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './containers/cart/cart.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {StoreModule} from "@ngrx/store";
import {cartReducer} from "./reducers/cart.reducer";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatIconModule} from "@angular/material/icon";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {NgPipesModule} from "ngx-pipes";
import {EffectsModule} from "@ngrx/effects";
import {CartEffect} from "./effects/cart.effect";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";

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
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgPipesModule,
    MatCardModule
  ]
})
export class CartModule {
}
