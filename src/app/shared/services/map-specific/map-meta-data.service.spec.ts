import { TestBed } from '@angular/core/testing';

import { MapMetaDataService } from './map-meta-data.service';

describe('MapInfoService', () => {
  let service: MapMetaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapMetaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
