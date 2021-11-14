import { Component, Input } from '@angular/core';

import { Subject } from 'rxjs';
import { MapsType } from './MapsType.enum';
import { MapMetaDataService } from 'src/app/shared/services/map-specific/map-meta-data.service';
import { MapMetadata } from 'src/app/shared/services/map-specific/map-meta-data.interface';
import { GameModeType } from '../../maps-games/game_mode_type';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent {

	input_value$ = new Subject<string>();

	/**
	 * L'enum MapsType, pour qu'elle soit accessible dans le template
	 */
	MapsType = MapsType;

	mapMetaData : MapMetadata =  {
			map_name : "undefined",
			map_details : "undefined",
			area_identifier : "undefined",
			zone_identifier : "undefined"
	};

	/**
	 * Le type de mode de jeu que l'on souhaite faire. Comme consultation, contre la montre etc..
	 */
	@Input() public  gameModeType : GameModeType = GameModeType.INPUT_GAME;
	/**
	 * La carte que l'on souhaite afficher
	 */
	@Input() public  map : MapsType = MapsType.NO_MAPS_DEFINED;

	/**
	 * La carte que l'on souhaite afficher
	 */
	 @Input() public  table : boolean = false;

	constructor(mapMetaDataService : MapMetaDataService){
		mapMetaDataService.mapMetaDataChange.subscribe((value)=>{this.mapMetaData = value;})
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

	areaFound( htmlElement : HTMLElement ){
		// console.log(htmlElement)
		// this.area_node_to_process = htmlElement;
	}
}
