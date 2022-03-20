import { TestBed } from '@angular/core/testing';

import { MapsTagsLoaderService } from './maps-tags-loader.service';

describe('MapsTagsLoaderService', () => {
  let service: MapsTagsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapsTagsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
