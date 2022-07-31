import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MapData } from '../../interfaces/MapData.interface';
@Injectable({
  providedIn: 'root'
})
export class MapDataService {
  private PATH : string = "./assets/maps/data/";
  private FILE_EXTENSION=".json";
  
  constructor(private http: HttpClient) { }

  getMapData(map_id : string): Observable<MapData[]>{
    return this.http.get<MapData[]>(this.PATH+map_id+this.FILE_EXTENSION);
  }
}
