import { Component, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Subscription } from 'rxjs';
import { CartStore } from './cart/cart.store';
import { Item } from './catalog/model/catalog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'ngrx-example';
  numberOfCartItems$ = this.cartStore.numberOfItems$;
  infoText = this.deviceDetector.isDesktop()
    ? '🔎 Blog Post: What is NgRx and why is it used in Angular apps?'
    : '🔎 Blog Post: Why is NgRx used in Angular apps?';
  private snackbarSubscription: Subscription | undefined;

  constructor(
    private cartStore: CartStore,
    public deviceDetector: DeviceDetectorService,
    private matsnackbar: MatSnackBar
  ) {}

  onItemAdded(item: Item, matsideNav: MatSidenav) {
    this.snackbarSubscription = this.matsnackbar
      .open(
        `${item.name} added to your cart.`,
        matsideNav.opened ? '' : 'Open Cart'
      )
      .onAction()
      .subscribe(() => {
        matsideNav.open();
      });
  }

  ngOnDestroy(): void {
    this.snackbarSubscription?.unsubscribe();
  }
}
