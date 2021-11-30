import { Component, Injector, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModeType } from 'src/app/shared/utils/types/game-mode.type';
import { MapsType } from 'src/app/shared/utils/types/maps.type';
import { GameModeMetaDataService } from '../../services/game-mode-specific/game-mode-meta-data.service';
import { MapMetaDataService } from '../../services/map-specific/map-meta-data.service';
import { GameStatus } from '../enums/GameStatus.enum';
import { GameModeFactory } from '../interfaces/game-oriented/game-mode-factory.interface';
import { GameModeMetaData } from '../interfaces/game-oriented/game-mode-meta-data.interface';
import { MapMetaData } from '../interfaces/map-oriented/map-meta-data.interface';

@Component({template : ''})
export abstract class Game implements GameModeFactory{
    
	selectedMap : MapMetaData = MapsType.MAPS_LIST[0]; 

	constructor(protected route: ActivatedRoute,
				protected router: Router,
				protected gameModeMetaDataService : GameModeMetaDataService){
		this.gameModeMetaDataService.getGameModeMetaDataChange().subscribe((value)=>{this.gameModeMetadata = value;});

		// Gets the url parameters
		let map : string = this.route.snapshot.queryParamMap.get('map')||"";
		
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
	
	
		// If the values are correct ones, then we process them, else we redirect to choosing page with an error snackbar
		if(MapsType.isValidType(map)){
		  // On force l'affectation car la vérification précédente assure que les données sont valides
		  this.selectedMap = MapsType.getTypeFromIdentifier(map)!;
		}else{
		  this.router.navigate(['/maps']);
		  /**
		   * @TODO Implements map choosing
		   */
		}
	
		// If there where args and the maps/game mode has been disaproved, then we show error
		if(this.route.snapshot.queryParamMap.keys.length != 0 && MapsType.isValidType(map)){
		  /**
		   * @TODO Implements error snackbar
		   */
		}
	}

    /**
	 * On rend accessible les types de maps pour le template (les types de map étant dans un context static)
	 */
	MapsType = MapsType;

	mapMetaData : MapMetaData =  MapsType.MAP_UNDEFINED;
	gameModeMetadata : GameModeMetaData =  GameModeType.GAME_CONSULT;

	/**
	 * La carte que l'on souhaite afficher
	 */
	@Input() public  map : MapsType = MapsType.MAP_UNDEFINED;

    /**
	 * Permet de savoir si une map donnée est celle configurée.
	 * @param map : La map donnée.
	 * @returns Un boolean, true si c'est la map configurée, false sinon.
	 */
	isConfiguredMap(map : MapsType) : boolean{
		return this.map == map;
	}

    currentStatus: GameStatus = GameStatus.START;

    abstract bindGameStatus(): void;
    abstract onStart(): void;
    abstract onPlaying(): void;
    abstract onPause(): void;
    abstract onWon(): void;
    abstract onLost(): void;
    abstract onError(): void;
}