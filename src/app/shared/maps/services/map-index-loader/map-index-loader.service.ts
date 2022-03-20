import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MapIndexEntry } from './interfaces/map-index-entry.interface';

@Injectable({
  providedIn: 'root'
})
export class MapIndexLoaderService {
  private PATH : string = "./assets/maps/";
  private FILE_NAME : string = "maps_index";
  private FILE_EXTENSION=".json";

  constructor(private http: HttpClient) { }
  
  /**
   * Allows to get the full list of declared maps
   * @returns The full list of declared maps
   */
  loadIndex() : Observable<MapIndexEntry[]>{
    return this.http.get<MapIndexEntry[]>(this.PATH+this.FILE_NAME+this.FILE_EXTENSION);
  }

  /**
   * Check if a map corresponds to a given identifier
   * @param mapIdentifier The map identifier
   * @returns The corresponding map if exists, else undefined
   */
  async getEntryIfExists(mapIdentifier : string) : Promise<MapIndexEntry | undefined>{
    return new Promise(resolve =>{
      this.loadIndex().subscribe((loadedIndex : MapIndexEntry[]) =>{
        resolve(loadedIndex.find(mapIndexEntry =>mapIndexEntry.mapIdentifier === mapIdentifier)); // Check the map identifier exists, if so then gets meta data
      });
    });
  }
}
