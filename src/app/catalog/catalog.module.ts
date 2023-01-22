import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogPageComponent } from './containers/catalog-page/catalog-page.component';
import {EffectsModule} from "@ngrx/effects";
import {CatalogEffect} from "./effects/catalog.effect";
import {StoreModule} from "@ngrx/store";
import {catalogReducer} from "./reducers/catalog.reducer";
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {BrowserModule} from "@angular/platform-browser";
import {MatButtonModule} from "@angular/material/button";
import { ItemComponent } from './components/item/item.component';
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    CatalogPageComponent,
    ItemComponent
  ],
  exports: [
    CatalogPageComponent
  ],
    imports: [
        CommonModule,
        StoreModule.forFeature('itemsFeature', catalogReducer),
        EffectsModule.forFeature([CatalogEffect]),
        HttpClientModule,
        MatListModule,
        BrowserModule,
        MatButtonModule,
        MatCardModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatSnackBarModule
    ]
})
export class CatalogModule { }
