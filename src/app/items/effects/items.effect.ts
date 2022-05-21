import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {ItemsService} from "../services/items.service";
import {getItems} from "../actions/items-page.actions";
import {itemsLoadedSuccessfully} from "../actions/items-api.actions";

@Injectable()
export class ItemsEffect {

  loadArticles$ = createEffect(() => this.actions$.pipe(
      ofType(getItems),
      mergeMap(() => this.articleService.getItems()
        .pipe(
          map(items => (itemsLoadedSuccessfully({data: items}))),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: ItemsService
  ) {}
}
