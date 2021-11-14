import { Component, Input } from '@angular/core';

import { Subject } from 'rxjs';
import { MapMetaDataService } from 'src/app/shared/services/map-specific/map-meta-data.service';
import { MapMetadata } from 'src/app/shared/services/map-specific/map-meta-data.interface';
import { GameModeType } from '../../maps-games/game_mode_type';
import { GameModeMetaDataService } from 'src/app/shared/services/game-mode-specific/game-mode-meta-data.service';
import { MapsType } from './maps-type';
import { GameModeMetaData } from 'src/app/shared/services/game-mode-specific/game-mode-mode-meta-data.interface';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent {

	/**
	 * On rend accessible les types de maps pour le template (les types de map étant dans un context static)
	 */
	MapsType = MapsType;

	mapMetaData : MapMetadata =  MapsType.MAP_UNDEFINED;
	gameModeMetadata : GameModeMetaData =  GameModeType.GAME_CONSULT;

	/**
	 * Le type de mode de jeu que l'on souhaite faire. Comme consultation, contre la montre etc..
	 */
	@Input() public  gameModeType : GameModeType = GameModeType.GAME_LISTE;
	/**
	 * La carte que l'on souhaite afficher
	 */
	@Input() public  map : MapsType = MapsType.MAP_UNDEFINED;

	/**
	 * La carte que l'on souhaite afficher
	 */
	 @Input() public  table : boolean = false;

	constructor(mapMetaDataService : MapMetaDataService, gameModeMetaDataService : GameModeMetaDataService){
		mapMetaDataService.mapMetaDataChange.subscribe((value)=>{this.mapMetaData = value;})
		gameModeMetaDataService.gameModeMetaDataChange.subscribe((value)=>{this.gameModeMetadata = value;})
	}

	/**
	 * Permet de savoir si une map donnée est celle configurée.
	 * @param map : La map donnée.
	 * @returns Un boolean, true si c'est la map configurée, false sinon.
	 */
	isConfiguredMap(map : MapsType) : boolean{
		return this.map == map;
	}

	/**
	 * Permet de savoir si une action donnée est celle configurée.
	 * @param action : Le mode de jeu donnée.
	 * @returns Un boolean, true si c'est le mode de jeu est configuré, false sinon.
	 */
	isConfiguredAction(gameModeType : GameModeType) : boolean{
		return this.gameModeType == gameModeType;
	}
}
