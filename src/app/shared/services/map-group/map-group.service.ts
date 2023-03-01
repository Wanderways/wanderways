import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MapGroup } from '../../interfaces/map-group.interface';

@Injectable({
  providedIn: 'root'
})
export class MapGroupService {
  private PATH: string = "./assets/maps/";
  private FILE_NAME: string = "maps_groups";
  private FILE_EXTENSION = ".json";

  constructor(private http: HttpClient) { }

  /**
   * Allows to get the full list of declared maps
   * @returns The full list of declared maps
   */
  getMapGroup$(): Observable<MapGroup[]> {
    return this.http.get<MapGroup[]>(this.PATH + this.FILE_NAME + this.FILE_EXTENSION);
  }

  /**
   * Check if a map corresponds to a given id
   * @param mapGroupId The map group id
   * @returns The corresponding map if exists, else undefined
   */
  getEntryIfExists(mapGroupId: string): Observable<MapGroup | undefined> {
    return this.getMapGroup$().pipe(map(maps => maps.find(mapGroup => mapGroup.mapGroupId === mapGroupId)))
  }
}
