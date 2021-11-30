import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModeMetaDataService } from 'src/app/shared/services/game-mode-specific/game-mode-meta-data.service';
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
    protected mapMetaDataService : MapMetaDataService) {
    super(route, router,  gameModeMetaDataService, mapMetaDataService);
  }

  ngOnInit(): void {
    this.gameModeMetaDataService.setGameMetaData(GameModeType.GAME_INPUT);
  }

  /**
	 * Clear the component used static data
	 */
	ngOnDestroy(){
		this.gameModeMetaDataService.clear();
	}
  
  bindGameStatus(): void {
    throw new Error('Method not implemented.');
  }
  onStart(): void {
    throw new Error('Method not implemented.');
  }
  onPlaying(): void {
    throw new Error('Method not implemented.');
  }
  onPause(): void {
    throw new Error('Method not implemented.');
  }
  onWon(): void {
    throw new Error('Method not implemented.');
  }
  onLost(): void {
    throw new Error('Method not implemented.');
  }
  onError(): void {
    throw new Error('Method not implemented.');
  }

}
