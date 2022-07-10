import { TestBed } from '@angular/core/testing';

import { MapSvgService } from './map-svg.service';

describe('MapService', () => {
  let service: MapSvgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapSvgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
