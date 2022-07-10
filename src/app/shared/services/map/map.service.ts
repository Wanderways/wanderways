import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Map } from '../../interfaces/Map.interface';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private PATH : string = "./assets/maps/";
  private FILE_NAME : string = "maps";
  private FILE_EXTENSION=".json";

  constructor(private http: HttpClient) { }
  /**
   * Check if a map corresponds to a given identifier
   * @param identifier The map identifier
   * @returns The corresponding map
   */
   getMap(identifier : string) : Promise<Map | undefined>{
    return new Promise(resolve =>{
      this.getMaps().subscribe((loadedIndex : Map[]) =>{
        resolve(loadedIndex.find(map =>map.identifier === identifier));
      });
    });
  }
  /**
   * Allows to get the full list of declared maps
   * @returns The full list of declared maps
   */
  getMaps() : Observable<Map[]>{
    return this.http.get<Map[]>(this.PATH+this.FILE_NAME+this.FILE_EXTENSION);
  }

  /**
   * Allows to get the full list of declared maps
   * @returns The full list of declared maps
   */
   getMapsFromGroup(mapGroupIdentifier : string) : Promise<Map[]>{
    return new Promise(
      resolve =>{
      this.getMaps().subscribe((loadedIndex : Map[]) =>{
        console.log(loadedIndex.filter(map =>map.mapGroupIdentifier === mapGroupIdentifier));
        resolve(loadedIndex.filter(map =>map.mapGroupIdentifier === mapGroupIdentifier));
      });
    });
  }

  
}
