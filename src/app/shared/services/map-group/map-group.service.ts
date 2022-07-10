import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MapGroup } from '../../interfaces/map-group.interface';

@Injectable({
  providedIn: 'root'
})
export class MapGroupService {
  private PATH : string = "./assets/maps/";
  private FILE_NAME : string = "maps_groups";
  private FILE_EXTENSION=".json";

  constructor(private http: HttpClient) { }
  
  /**
   * Allows to get the full list of declared maps
   * @returns The full list of declared maps
   */
  loadIndex() : Observable<MapGroup[]>{
    return this.http.get<MapGroup[]>(this.PATH+this.FILE_NAME+this.FILE_EXTENSION);
  }

  /**
   * Check if a map corresponds to a given identifier
   * @param mapGroupidentifier The map group identifier
   * @returns The corresponding map if exists, else undefined
   */
  async getEntryIfExists(mapGroupidentifier : string) : Promise<MapGroup | undefined>{
    return new Promise(resolve =>{
      this.loadIndex().subscribe((loadedIndex : MapGroup[]) =>{
        resolve(loadedIndex.find(mapGroup =>mapGroup.mapGroupidentifier === mapGroupidentifier)); // Check the map identifier exists, if so then gets meta data
      });
    });
  }
}
