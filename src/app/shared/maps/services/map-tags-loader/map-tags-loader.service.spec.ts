import { TestBed } from '@angular/core/testing';

import { MapTagsLoaderService } from './map-tags-loader.service';

describe('MapTagsLoaderService', () => {
  let service: MapTagsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapTagsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
