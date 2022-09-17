import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {CatalogService} from "../services/catalog.service";
import {itemsLoadedSuccess} from "../actions/catalog-api.actions";
import {CatalogPageActions} from "../actions/catalog-page.actions";

@Injectable()
export class CatalogEffect {

  loadArticles$ = createEffect(() => this.actions$.pipe(
      ofType(CatalogPageActions.getItems),
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
