import { TestBed } from '@angular/core/testing';

import { TagGroupLoaderService } from './tag-group-loader.service';

describe('TagGroupLoaderService', () => {
  let service: TagGroupLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagGroupLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
