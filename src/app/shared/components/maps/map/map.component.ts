import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

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

	@Input() public finalData : Area[] = [];

	/**
	 * La carte que l'on souhaite afficher
	 */
	@Input() public  map : MapMetaData = MapsType.MAP_UNDEFINED;

	/**
	 * If node selection should be allowed or not
	 */
	@Input() public  clickArea : boolean = false;
	/**
	 * If color for result should be applied or not
	 */
	@Input() public displayResult : boolean = false;
	 
	constructor(){}

	ngOnInit(): void {}

	/**
	 * Look for input changes
	 * @param changes A detected input change
	 */
	ngOnChanges(changes : SimpleChanges){
		console.log("onChanges map");
		if(changes.finalData)if(this.displayResult)this.finalData=changes.finalData.currentValue;
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
