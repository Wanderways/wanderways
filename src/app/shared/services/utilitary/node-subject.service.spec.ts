import { TestBed } from '@angular/core/testing';

import { NodeSubjectService } from './node-subject.service';

describe('NodeSubjectService', () => {
  let service: NodeSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
