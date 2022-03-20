import { TestBed } from '@angular/core/testing';

import { MapIndexLoaderService } from './map-index-loader.service';

describe('MapIndexLoaderService', () => {
  let service: MapIndexLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapIndexLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
