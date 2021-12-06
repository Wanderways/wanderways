import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModeMetaDataService } from 'src/app/shared/services/game-mode-specific/game-mode-meta-data.service';
import { GameStatusService } from 'src/app/shared/services/game-mode-specific/game-status.service';
import { MapMetaDataService } from 'src/app/shared/services/map-specific/map-meta-data.service';
import { Game } from 'src/app/shared/utils/abstract/game.abstract';
import { GameStatus } from 'src/app/shared/utils/enums/GameStatus.enum';

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
              protected gameStatusService : GameStatusService) {
    super(route, router,  gameModeMetaDataService, mapMetaDataService,gameStatusService);
  }
  ngOnInit(): void {
  }


  /**
	 * Clear the component used static data
	 */
	ngOnDestroy(){
    this.gameStatusService.clear();
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
		this.gameStatusService.setGameStatus(GameStatus.LOST);
  }
  onError(): void {
    
  }

  /**
   * Check if the given GameStatus is the current one
   * @param gamestatus The GameStatus to check
   * @returns True if the given GameStatus is equal to the current one
   */
  checkCurrentGameStatus(gamestatus: GameStatus): boolean {
		return this.gameStatusService.getGameStatus() == gamestatus;
  }
  /**
   * Handles the start button and allows to change screen
   */
  startEventHandler(){
    this.gameStatusService.setGameStatus(GameStatus.PLAYING);
  }
}
