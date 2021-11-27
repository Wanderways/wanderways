import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataSubjectService } from 'src/app/shared/services/map-specific/data-subject.service';
import { MapMetaDataService } from 'src/app/shared/services/map-specific/map-meta-data.service';
import { MapToolbox } from '../map-toolbox';
import { data } from './data';
import { Area } from '../../../utils/interfaces/area';
import { MapsType } from '../../../utils/types/maps.type';
import { InputSubjectService } from 'src/app/shared/services/game-mode-specific/input-subject.service';
import { NodeSubjectService } from 'src/app/shared/services/map-specific/node-subject.service';


@Component({
	selector: 'app-map-departements-francais',
	templateUrl: './map-departements-francais.component.html',
	styleUrls: ['./map-departements-francais.component.scss']
})
export class MapDepartementsFrancaisComponent extends MapToolbox  implements OnInit {

  	data : Area[] = data;

	constructor(inputSubjectService :InputSubjectService, nodeSubjectService : NodeSubjectService, dataSubjectService : DataSubjectService, mapMetaDataService : MapMetaDataService){
			super(inputSubjectService, nodeSubjectService, dataSubjectService, mapMetaDataService); 
	}

	ngOnInit(): void {
		super.ngOnInit();
		this.mapMetaDataService.setMapMetaData( MapsType.MAP_DEPARTEMENTS_FRANCE );
	}
}
