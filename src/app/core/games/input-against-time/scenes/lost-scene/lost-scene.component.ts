import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Area } from 'src/app/shared/utils/interfaces/map-oriented/area';
import { MapMetaData } from 'src/app/shared/utils/interfaces/map-oriented/map-meta-data.interface';
import { MapsType } from 'src/app/shared/utils/types/maps.type';

@Component({
  selector: 'app-lost-scene',
  templateUrl: './lost-scene.component.html',
  styleUrls: ['./lost-scene.component.scss']
})
export class LostSceneComponent implements OnInit {

	@Input() sourceData :  Area[] = [];
	@Input() finalData :  Area[] = [];
	@Input() mapMetaData : MapMetaData = MapsType.MAP_DEPARTEMENTS_FRANCE;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Look for input changes
   * @param changes A detected input change
   */
  ngOnChanges(changes : SimpleChanges){
		if(changes.finalData)this.finalData=changes.finalData.currentValue;
	}
}
