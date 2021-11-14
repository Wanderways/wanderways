import { TestBed } from '@angular/core/testing';

import { GameModeMetaDataService } from './game-mode-meta-data.service';

describe('GameMetaDataService', () => {
  let service: GameModeMetaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameModeMetaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
