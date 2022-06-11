import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import {CommonModule} from "@angular/common";
import {EffectsModule, EffectsRootModule} from "@ngrx/effects";
import {CartEffect} from "../../effects/cart.effect";
import {StoreModule} from "@ngrx/store";
import {cartReducer} from "../../reducers/cart.reducer";
import {MatCardModule} from "@angular/material/card";
import {provideMockStore} from "@ngrx/store/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {NgPipesModule} from "ngx-pipes";

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [
        CommonModule,
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([CartEffect]),
        StoreModule.forRoot({}),
        StoreModule.forFeature('cartFeature', cartReducer),
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        NgPipesModule
      ],
      providers: [
        provideMockStore({})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
