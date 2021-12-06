import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModeMetaDataService } from 'src/app/shared/services/game-mode-specific/game-mode-meta-data.service';
import { GameStatusService } from 'src/app/shared/services/game-mode-specific/game-status.service';
import { TimerService } from 'src/app/shared/services/game-mode-specific/timer.service';
import { MapMetaDataService } from 'src/app/shared/services/map-specific/map-meta-data.service';
import { InputAgainstTimeComponent } from '../../input-against-time.component';
import { GameModeType } from 'src/app/shared/utils/types/game-mode.type';
import { GameStatus } from 'src/app/shared/utils/enums/GameStatus.enum';

@Component({
  selector: 'app-input-against-time-scene',
  templateUrl: './input-against-time-scene.component.html',
  styleUrls: ['./input-against-time-scene.component.scss']
})
export class InputAgainstTimeSceneComponent extends InputAgainstTimeComponent implements OnInit {

	constructor(
		protected route: ActivatedRoute,
		protected router: Router,
		protected gameModeMetaDataService : GameModeMetaDataService,
		protected mapMetaDataService : MapMetaDataService,
		protected gameStatusService : GameStatusService,
		protected timerService : TimerService) {
		super(route, router, gameModeMetaDataService, mapMetaDataService,gameStatusService);
		this.gameModeMetaDataService.setGameMetaData(GameModeType.GAME_INPUT);
	}

	ngOnInit(): void {
		/**
		 * @TODO remove setTimeout that allows to wait for the upperbound to be set.
		 */
		setTimeout(()=>this.timerService.startTimer(this.onLost.bind(this)));
	}
	/**
	 * Clear the component used static data
	 */
	ngOnDestroy(){
		this.gameModeMetaDataService.clear();
		this.timerService.clear();
	}
}
