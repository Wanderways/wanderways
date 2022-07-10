import { TestBed } from '@angular/core/testing';

import { MapTagsService } from './map-tags.service';

describe('MapTagsService', () => {
  let service: MapTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
