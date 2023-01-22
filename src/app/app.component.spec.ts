import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {provideMockStore} from "@ngrx/store/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserModule} from "@angular/platform-browser";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {CartModule} from "./cart/cart.module";
import {CatalogModule} from "./catalog/catalog.module";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {shellReducer} from "./shell/reducers/core.reducer";
import {MatBadgeModule} from "@angular/material/badge";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({})
      ],
      imports: [
        MatSnackBarModule,
        MatIconModule,
        MatBadgeModule,
        MatSidenavModule,
        BrowserModule,
        NoopAnimationsModule,
        CartModule,
        CatalogModule,
        StoreModule.forRoot(shellReducer),
        EffectsModule.forRoot([]),
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngrx-example'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngrx-example');
  });
});
