import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './containers/item-list/item-list.component';
import {EffectsModule} from "@ngrx/effects";
import {ItemsEffect} from "./effects/items.effect";
import {StoreModule} from "@ngrx/store";
import {itemsReducer} from "./reducers/items.reducer";
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {BrowserModule} from "@angular/platform-browser";
import {MatButtonModule} from "@angular/material/button";
import { ItemComponent } from './components/item/item.component';
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    ItemListComponent,
    ItemComponent
  ],
  exports: [
    ItemListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('itemsFeature', itemsReducer),
    EffectsModule.forFeature([ItemsEffect]),
    HttpClientModule,
    MatListModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
  ]
})
export class ItemsModule { }
