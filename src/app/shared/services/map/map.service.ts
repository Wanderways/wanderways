import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from "rxjs/operators";
import { Map } from '../../interfaces/Map.interface';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private PATH: string = "./assets/maps/";
  private FILE_NAME: string = "maps";
  private FILE_EXTENSION = ".json";

  constructor(private http: HttpClient) { }
  /**
   * Check if a map corresponds to a given id
   * @param id The map id
   * @returns The corresponding map
   */
  getMap(id: string): Observable<Map | undefined> {
    return this.getMaps().pipe(
      map(el => el.find(map => map.id === id))
    )
  }
  /**
   * Allows to get the full list of declared maps
   * @returns The full list of declared maps
   */
  getMaps(): Observable<Map[]> {
    return this.http.get<Map[]>(this.PATH + this.FILE_NAME + this.FILE_EXTENSION);
  }

  /**
   * Allows to get the full list of declared maps
   * @returns The full list of declared maps
   */
  getMapsFromGroup(mapGroupId: string): Observable<Map[]> {
    return this.getMaps().pipe(
      map(maps => maps.filter(map => map.mapGroupId === mapGroupId))
    )
  }


}
