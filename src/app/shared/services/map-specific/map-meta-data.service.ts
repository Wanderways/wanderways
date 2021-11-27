import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MapsType } from '../../utils/types/maps.type';
import { MapMetaData } from '../../utils/interfaces/map-meta-data.interface';

@Injectable({
  providedIn: 'root'
})
export class MapMetaDataService {
  mapMetaData : MapMetaData = MapsType.MAP_UNDEFINED;

  mapMetaDataChange : Subject<MapMetaData> = new Subject<MapMetaData>();

  constructor() { 
    this.mapMetaDataChange.next(this.mapMetaData);
    this.mapMetaDataChange.subscribe((value : MapMetaData)=>{this.mapMetaData = value;});
  }

  /**
   * Permet de mettre à jour la valeur des métas données
   * @param mapMetadata : Une instance valide du type "MapMetaData"
   */
  setMapMetaData(mapMetadata : MapMetaData){
		setTimeout(() => { this.mapMetaDataChange.next(mapMetadata); });
  }

  /**
   * Permet d'obtenir les métas données de la map
   * @returns 
   */
  getMapMetaData(){
    return this.mapMetaData;
  }
}