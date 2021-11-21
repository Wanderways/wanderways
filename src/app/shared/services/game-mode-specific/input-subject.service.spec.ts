import { TestBed } from '@angular/core/testing';

import { InputSubjectService } from './input-subject.service';

describe('InputSubjectService', () => {
  let service: InputSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
