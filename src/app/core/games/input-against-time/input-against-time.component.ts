import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModeMetaDataService } from 'src/app/shared/services/game-mode-specific/game-mode-meta-data.service';
import { GameStatusService } from 'src/app/shared/services/game-mode-specific/game-status.service';
import { TimerService } from 'src/app/shared/services/game-mode-specific/timer.service';
import { MapMetaDataService } from 'src/app/shared/services/map-specific/map-meta-data.service';
import { Game } from 'src/app/shared/utils/abstract/game.abstract';
import { GameModeType } from 'src/app/shared/utils/types/game-mode.type';

@Component({
  selector: 'app-input-against-time',
  templateUrl: './input-against-time.component.html',
  styleUrls: ['./input-against-time.component.scss']
})
export class InputAgainstTimeComponent extends Game implements OnInit {

  constructor(protected route: ActivatedRoute,
    protected router: Router,
    protected gameModeMetaDataService : GameModeMetaDataService,
    protected mapMetaDataService : MapMetaDataService,
    protected gameStatusService : GameStatusService,
    private timerService : TimerService) {
    super(route, router,  gameModeMetaDataService, mapMetaDataService,gameStatusService);
  }

  ngOnInit(): void {
    this.gameModeMetaDataService.setGameMetaData(GameModeType.GAME_INPUT);
  }

  ngAfterContentInit(): void{
    this.timerService.launchGameStatusChangeDetection();
  }

  /**
	 * Clear the component used static data
	 */
	ngOnDestroy(){
		this.gameModeMetaDataService.clear();
    this.gameStatusService.clear();
    this.timerService.stopGameStatusChangeDetection();
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
}
