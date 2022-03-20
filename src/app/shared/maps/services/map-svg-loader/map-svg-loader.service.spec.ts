import { TestBed } from '@angular/core/testing';

import { MapSvgLoaderService } from './map-svg-loader.service';

describe('MapLoaderService', () => {
  let service: MapSvgLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapSvgLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
