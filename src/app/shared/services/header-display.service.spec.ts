import { TestBed } from '@angular/core/testing';

import { HeaderDisplayService } from './header-display.service';

describe('HeaderDisplayService', () => {
  let service: HeaderDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
