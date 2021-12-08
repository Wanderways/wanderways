import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModeType } from 'src/app/shared/utils/types/game-mode.type';
import { MapsType } from 'src/app/shared/utils/types/maps.type';
import { GameModeMetaDataService } from '../../services/game-mode-specific/game-mode-meta-data.service';
import { GameStatusService } from '../../services/game-mode-specific/game-status.service';
import { MapMetaDataService } from '../../services/map-specific/map-meta-data.service';
import { GameStatus } from '../enums/GameStatus.enum';
import { GameMode } from '../interfaces/game-oriented/game-mode.interface';
import { GameModeMetaData } from '../interfaces/game-oriented/game-mode-meta-data.interface';
import { MapMetaData } from '../interfaces/map-oriented/map-meta-data.interface';
import { Subscription } from 'rxjs';

/**
 * Generalizes and facilitate the game mode creation. Limit the customizations possibilities.
 */
@Component({template : ''})
export abstract class Game implements GameMode{
    
	/**
	 * Allows child to use the enum
	 */
	GameStatus = GameStatus;

	selectedMap : MapMetaData = MapsType.MAPS_LIST[0];

	mapMetaData : MapMetaData =  MapsType.MAP_UNDEFINED;
	gameModeMetadata : GameModeMetaData =  GameModeType.GAME_CONSULT;

    protected subscriptions : {[key:string]:Subscription} = {};

	constructor(protected route: ActivatedRoute,protected router: Router,protected gameModeMetaDataService : GameModeMetaDataService,protected mapMetaDataService : MapMetaDataService,protected gameStatusService : GameStatusService){
		this.bindGameStatus();
		this.subscribe();
		this.processUrlParameter();
	}

    abstract onStart(): void;
    abstract onPlaying(): void;
    abstract onPause(): void;
    abstract onWon(): void;
    abstract onLost(): void;
    abstract onError(): void;
	
	abstract bindGameStatus(): void;

	/**
	 * Check if the given GameStatus is the current one
	 * @param gamestatus The GameStatus to check
	 * @returns True if the given GameStatus is equal to the current one
	 */
	abstract checkCurrentGameStatus(gamestatus : GameStatus) : boolean;

	/**
	 * Subscribes to the appropriates services
	 */
	private subscribe(){
		this.subscriptions.gameModeMetaDataChange = this.gameModeMetaDataService.getGameModeMetaDataChange().subscribe(value => this.gameModeMetadata = value);
		this.subscriptions.mapMetaDataChange = this.mapMetaDataService.getMapMetaDataChange().subscribe(value => this.mapMetaData = value)
	}

	/**
	 * Get the url parameters to act appropriatly
	 */
	private processUrlParameter(){
		// Gets the url parameters
		let map : string = this.route.snapshot.queryParamMap.get('map')||"";
		// Defines that the page sould reload, not use cache (for flow control reasons)	
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;

		// If the values are correct ones, then we process them, else we redirect to choosing page with an error snackbar
		if(MapsType.isValidType(map)){
			// On force l'affectation car la vérification précédente assure que les données sont valides
			this.selectedMap = MapsType.getTypeFromIdentifier(map)!;
		}else{
			this.router.navigate(['/maps']);
		}

		// If there where args and the maps/game mode has been disaproved, then we show error
		if(this.route.snapshot.queryParamMap.keys.length != 0 && MapsType.isValidType(map)){
		/**
		 * @TODO Implements error snackbar
		 */
		}
	}
}