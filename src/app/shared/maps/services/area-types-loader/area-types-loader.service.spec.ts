import { TestBed } from '@angular/core/testing';

import { AreaTypesLoaderService } from './area-types-loader.service';

describe('AreaTypesLoaderService', () => {
  let service: AreaTypesLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaTypesLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
