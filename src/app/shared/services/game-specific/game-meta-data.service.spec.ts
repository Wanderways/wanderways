import { TestBed } from '@angular/core/testing';

import { GameMetaDataService } from './game-meta-data.service';

describe('GameMetaDataService', () => {
  let service: GameMetaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameMetaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
