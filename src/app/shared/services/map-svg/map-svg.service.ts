import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MapSvg } from '../../interfaces/maps_svg.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapSvgService {

  private PATH : string = "./assets/maps/maps_svg/svg/";
  private FILE_EXTENSION=".svg.json";

  constructor(private http: HttpClient) { }

  /**
   * Loads the svg corresponding to the given map id
   * @param map_id The map id
   * @returns The data to build an svg representation of the map from
   */
  getMapSvg(map_id : string): Observable<MapSvg>{
    return this.http.get<MapSvg>(this.PATH+map_id+this.FILE_EXTENSION);
  }
}
