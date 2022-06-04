import {Component, OnDestroy} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectNumberOfCartItems, ShellState} from "./shell/selectors/core.selector";
import {Observable, Subscription} from "rxjs";
import {DeviceDetectorService} from "ngx-device-detector";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatSidenav} from "@angular/material/sidenav";
import {Item} from "./catalog/model/catalog.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'ngrx-example';
  numberOfCartItems$: Observable<number>;
  private snackbarSubscription: Subscription | undefined;

  constructor(private store: Store<ShellState>,
              public deviceDetector: DeviceDetectorService,
              private matsnackbar: MatSnackBar) {
    this.numberOfCartItems$ = this.store.select(selectNumberOfCartItems);
  }

  onItemAdded(item: Item, matsideNav: MatSidenav) {
    this.snackbarSubscription = this.matsnackbar.open(`${item.name} added to your cart.`, matsideNav.opened ? '' : 'Open Cart').onAction().subscribe(() => {
      matsideNav.open();
    });
  }

  ngOnDestroy(): void {
    this.snackbarSubscription?.unsubscribe();
  }
}
