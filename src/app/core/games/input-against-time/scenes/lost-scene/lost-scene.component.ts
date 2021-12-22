import { Component, Input, OnInit } from '@angular/core';
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
	@Input() mapMetaData : MapMetaData = MapsType.MAP_DEPARTEMENTS_FRANCE;

  constructor() { }

  ngOnInit(): void {
  }

}
