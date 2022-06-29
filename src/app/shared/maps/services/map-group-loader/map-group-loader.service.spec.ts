import { TestBed } from '@angular/core/testing';

import { MapGroupLoaderService } from './map-group-loader.service';

describe('MapIndexLoaderService', () => {
  let service: MapGroupLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapGroupLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
