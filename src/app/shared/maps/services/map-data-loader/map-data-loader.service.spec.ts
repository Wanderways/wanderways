import { TestBed } from '@angular/core/testing';

import { MapDataLoaderService } from './map-data-loader.service';

describe('MapDataLoaderService', () => {
  let service: MapDataLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapDataLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
