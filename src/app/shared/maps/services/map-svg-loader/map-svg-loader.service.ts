import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MapSvg } from './maps_svg.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapSvgLoaderService {

  private PATH : string = "./assets/maps/maps_svg/";
  private FILE_EXTENSION=".svg.json";

  constructor(private http: HttpClient) { }

  /**
   * Loads the svg corresponding to the given map identifier
   * @param map_identifier The map id
   * @returns The data to build an svg representation of the map from
   */
  getMapSvg(map_identifier : string): Observable<MapSvg>{
    return this.http.get<MapSvg>(this.PATH+map_identifier+this.FILE_EXTENSION);
  }
}
