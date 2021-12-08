import { Component, Input, OnInit } from '@angular/core';

import { MapMetaDataService } from 'src/app/shared/services/map-specific/map-meta-data.service';
import { MapMetaData } from "src/app/shared/utils/interfaces/map-oriented/map-meta-data.interface";
import { MapsType } from '../../../utils/types/maps.type';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

	/**
	 * On rend accessible les types de maps pour le template (les types de map étant dans un context static)
	 */
	MapsType = MapsType;


	/**
	 * La carte que l'on souhaite afficher
	 */
	@Input() public  map : MapMetaData = MapsType.MAP_UNDEFINED;

	constructor(){}

	ngOnInit(): void {}
	
	ngOnDestroy() : void {
	}

	/**
	 * Permet de savoir si une map donnée est celle configurée.
	 * @param map : La map donnée.
	 * @returns Un boolean, true si c'est la map configurée, false sinon.
	 */
	 isConfiguredMap(map : MapsType) : boolean{
		return this.map == map;
	}
}
