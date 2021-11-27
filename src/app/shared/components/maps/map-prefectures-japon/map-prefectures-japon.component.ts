import { Component, OnInit } from '@angular/core';
import { InputSubjectService } from 'src/app/shared/services/game-mode-specific/input-subject.service';
import { DataSubjectService } from 'src/app/shared/services/map-specific/data-subject.service';
import { MapMetaDataService } from 'src/app/shared/services/map-specific/map-meta-data.service';
import { NodeSubjectService } from 'src/app/shared/services/map-specific/node-subject.service';
import { MapToolbox } from '../map-toolbox';
import { MapsTypes } from '../../../utils/types/maps-types';
import { Area } from 'src/app/shared/utils/interfaces/area';
import { data } from './data'
@Component({
  selector: 'app-map-prefectures-japon',
  templateUrl: './map-prefectures-japon.component.html',
  styleUrls: ['./map-prefectures-japon.component.scss']
})
export class MapPrefecturesJaponComponent extends MapToolbox  implements OnInit {
  data : Area[] = data;
  constructor(inputSubjectService :InputSubjectService, nodeSubjectService : NodeSubjectService, dataSubjectService : DataSubjectService, mapMetaDataService : MapMetaDataService){
    super(inputSubjectService, nodeSubjectService, dataSubjectService, mapMetaDataService); 
  }
  ngOnInit(): void {
		super.ngOnInit();
		this.mapMetaDataService.setMapMetaData( MapsTypes.MAP_PREFECTURES_JAPON );
  }

}
