import { TestBed } from '@angular/core/testing';

import { StringFactoryService } from './string-factory.service';

describe('StringFactoryService', () => {
  let service: StringFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
