import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {CatalogService} from "../services/catalog.service";
import {getItems} from "../actions/items-page.actions";
import {itemsLoadedSuccess} from "../actions/items-api.actions";

@Injectable()
export class CatalogEffect {

  loadArticles$ = createEffect(() => this.actions$.pipe(
      ofType(getItems),
      mergeMap(() => this.articleService.getItems()
        .pipe(
          map(items => (itemsLoadedSuccess({data: items}))),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: CatalogService
  ) {}
}
