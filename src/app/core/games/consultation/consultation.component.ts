import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModeMetaDataService } from 'src/app/shared/services/game-mode-specific/game-mode-meta-data.service';
import { GameStatusService } from 'src/app/shared/services/game-mode-specific/game-status.service';
import { MapMetaDataService } from 'src/app/shared/services/map-specific/map-meta-data.service';
import { Game } from 'src/app/shared/utils/abstract/game.abstract';
import { GameStatus } from 'src/app/shared/utils/enums/GameStatus.enum';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent extends Game implements OnInit {
  

  constructor(protected route: ActivatedRoute,
    protected router: Router,
    protected gameModeMetaDataService : GameModeMetaDataService,
    protected mapMetaDataService : MapMetaDataService,
    protected gameStatusService : GameStatusService) {
    super(route, router,  gameModeMetaDataService, mapMetaDataService, gameStatusService);
  }

  ngOnInit(): void {
    
  }
  bindGameStatus(): void {
    
  }
  onStart(): void {
    
  }
  onPlaying(): void {
    
  }
  onPause(): void {
    
  }
  onWon(): void {
    
  }
  onLost(): void {
    
  }
  onError(): void {
    
  }

  checkCurrentGameStatus(gamestatus: GameStatus): boolean {
    throw new Error('Method not implemented.');
  }
}
