import { Component, OnInit } from '@angular/core';
import { InputSubjectService } from 'src/app/shared/services/game-mode-specific/input-subject.service';
import { DataSubjectService } from 'src/app/shared/services/map-specific/data-subject.service';
import { MapMetaDataService } from 'src/app/shared/services/map-specific/map-meta-data.service';
import { NodeSubjectService } from 'src/app/shared/services/map-specific/node-subject.service';
import { MapToolbox } from '../map-toolbox';
import { MapsType } from '../../../utils/types/maps.type';
import { Area } from 'src/app/shared/utils/interfaces/map-oriented/area';
import { data } from './data'
@Component({
  selector: 'app-map-prefectures-japon',
  templateUrl: './map-prefectures-japon.component.html',
  styleUrls: ['./map-prefectures-japon.component.scss']
})
export class MapPrefecturesJaponComponent extends MapToolbox  implements OnInit {
  constructor(inputSubjectService :InputSubjectService, nodeSubjectService : NodeSubjectService, dataSubjectService : DataSubjectService, mapMetaDataService : MapMetaDataService){
    super(inputSubjectService, nodeSubjectService, dataSubjectService, mapMetaDataService); 
    
		this.mapMetaDataService.setMapMetaData( MapsType.MAP_PREFECTURES_JAPON );
  }
  ngOnInit(): void {
		super.ngOnInit();
    /**
     * The data source must be initialized in the constructor for stability issues
     * More precisely, if not executed in the constructor, the value will be set during the building stage, between components state checking. Between two checks, the value will have changed, and cause a non-fatal error
     * @TODO Remove data setting from this part and transfer to game.abstract class the responsibility using a service to call the database.
     */
		setTimeout(()=>this.dataSubjectService.setsourceDataValue(data));
  }

  ngOnDestroy(){
		Object.keys(this.subscriptions).forEach((key : string) => {
			this.subscriptions[key].unsubscribe();
		});
	}
}
