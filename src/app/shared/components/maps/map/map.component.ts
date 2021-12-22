import { Component, Input, OnInit } from '@angular/core';

import { MapMetaData } from "src/app/shared/utils/interfaces/map-oriented/map-meta-data.interface";
import { MapsType } from '../../../utils/types/maps.type';
import { Area } from 'src/app/shared/utils/interfaces/map-oriented/area';

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

	@Input() data : Area[] = [];

	/**
	 * La carte que l'on souhaite afficher
	 */
	@Input() public  map : MapMetaData = MapsType.MAP_UNDEFINED;

	/**
	 * If node selection should be allowed or not
	 */
	@Input() public  clickArea : boolean = false;
	 
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
