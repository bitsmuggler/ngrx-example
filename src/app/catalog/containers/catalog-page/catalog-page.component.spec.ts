import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPageComponent } from './catalog-page.component';
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {catalogReducer} from "../../reducers/catalog.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CatalogEffect} from "../../effects/catalog.effect";
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {BrowserModule} from "@angular/platform-browser";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";

describe('ArticlesListComponent', () => {
  let component: CatalogPageComponent;
  let fixture: ComponentFixture<CatalogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogPageComponent ],
      imports: [
        CommonModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('itemsFeature', catalogReducer),
        EffectsModule.forRoot([]),
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
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
