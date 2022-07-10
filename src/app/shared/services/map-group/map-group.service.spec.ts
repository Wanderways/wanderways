import { TestBed } from '@angular/core/testing';

import { MapGroupService } from './map-group.service';

describe('MapIndexService', () => {
  let service: MapGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
