import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MapMetadata } from './map-meta-data.interface';

@Injectable({
  providedIn: 'root'
})
export class MapMetaDataService {
  mapMetaData : MapMetadata = {
    map_name : "undefined",
    map_details : "undefined",
    area_identifier : "undefined",
    zone_identifier : "undefined"
  };

  mapMetaDataChange : Subject<MapMetadata> = new Subject<MapMetadata>();

  constructor() { 
    this.mapMetaDataChange.next(this.mapMetaData);
    this.mapMetaDataChange.subscribe((value : MapMetadata)=>{this.mapMetaData = value;});
  }

  /**
   * Permet de mettre à jour la valeur des métas données
   * @param mapMetadata : Une instance valide du type "MapMetadata"
   */
  setMapMetaData(mapMetadata : MapMetadata){
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