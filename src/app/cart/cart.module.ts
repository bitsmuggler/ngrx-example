import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgPipesModule } from 'ngx-pipes';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './containers/cart/cart.component';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  exports: [CartComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgPipesModule,
  ],
})
export class CartModule {}
