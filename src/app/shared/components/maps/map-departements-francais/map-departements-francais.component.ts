import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataSubjectService } from 'src/app/shared/services/utilitary/data-subject.service';
import { InputSubjectService } from 'src/app/shared/services/utilitary/input-subject.service';
import { NodeSubjectService } from 'src/app/shared/services/utilitary/node-subject.service';
import { MapMetaDataService } from 'src/app/shared/services/map-specific/map-meta-data.service';
import { MapToolbox } from '../map-toolbox';
import { data } from './data';
import { Area } from './interfaces/area';
import { Zone } from './interfaces/zone';


@Component({
  selector: 'app-map-departements-francais',
  templateUrl: './map-departements-francais.component.html',
  styleUrls: ['./map-departements-francais.component.scss']
})
export class MapDepartementsFrancaisComponent extends MapToolbox  implements OnInit {

  	data : Area[] = data;

	constructor(inputSubjectService :InputSubjectService, nodeSubjectService : NodeSubjectService, dataSubjectService : DataSubjectService, mapMetaDataService : MapMetaDataService){
		super(inputSubjectService, nodeSubjectService, dataSubjectService, mapMetaDataService);
		mapMetaDataService.setMapMetaData({
			map_name :"Départements Français",
			map_details:"Avec DotTom, hors Collectivité d'outre-mer française",
			area_identifier:"Département",
			zone_identifier :"Région"
		});
  }

  ngOnInit(): void {
    super.ngOnInit();
    super.setMapMetaData( "Départements Français",
                          "Avec DotTom, hors Collectivité d'outre-mer française",
                          "Département",
                          "Région");
  }
}
