import { TestBed } from '@angular/core/testing';

import { CatalogService } from './catalog.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ArticlesService', () => {
  let service: CatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
