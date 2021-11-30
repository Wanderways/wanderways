import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MapsType } from '../../utils/types/maps.type';
import { MapMetaData } from "src/app/shared/utils/interfaces/map-oriented/map-meta-data.interface";

@Injectable({
  providedIn: 'root'
})
export class MapMetaDataService {
  private mapMetaData : MapMetaData = MapsType.MAP_UNDEFINED;

  private mapMetaDataChange : Subject<MapMetaData> = new Subject<MapMetaData>();

  public constructor() { 
    this.mapMetaDataChange.next(this.mapMetaData);
    this.mapMetaDataChange.subscribe((value : MapMetaData)=>{this.mapMetaData = value;});
  }

  /**
   * Permet de mettre à jour la valeur des métas données
   * @param mapMetadata : Une instance valide du type "MapMetaData"
   */
   public setMapMetaData(mapMetadata : MapMetaData) : void {
		setTimeout(() => { this.mapMetaDataChange.next(mapMetadata); });
  }

  /**
   * Permet d'obtenir les métas données de la map
   * @returns 
   */
  public getMapMetaData() : MapMetaData{
    return this.mapMetaData;
  }

  /**
   * Allows to get the MapMetadata subject to subscribe to
   * @returns The MapMetadata subject to subscribe to
   */
   public getMapMetaDataChange() : Subject<MapMetaData>{
    return this.mapMetaDataChange;
  }

  /**
   * Set the current meta data to undefined
   */
  public clear() : void {
    this.setMapMetaData(MapsType.MAP_UNDEFINED);
  }
}