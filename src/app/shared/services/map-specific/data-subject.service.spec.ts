import { TestBed } from '@angular/core/testing';

import { DataSubjectService } from './data-subject.service';

describe('DataSubjectService', () => {
  let service: DataSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
