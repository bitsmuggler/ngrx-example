import { Injectable } from '@angular/core';
import { AdaptCommon, getHttpSources, toSource } from '@state-adapt/core';
import { catalogAdapter, catalogInitialState } from './catalog.adapter';
import { CatalogService } from './services/catalog.service';

@Injectable({ providedIn: 'root' })
export class CatalogStore {
  itemsRequest = getHttpSources(
    '[Catalog]',
    this.catalogService.getItems(),
    (res) => [!!res, res, 'Error']
  );

  store = this.adapt.init(['catalog', catalogAdapter, catalogInitialState], {
    receiveItems: this.itemsRequest.success$,
    noop: this.itemsRequest.request$,
  });

  constructor(
    private adapt: AdaptCommon,
    private catalogService: CatalogService
  ) {}
}
