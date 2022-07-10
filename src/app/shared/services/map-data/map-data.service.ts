import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AreaCommons } from '../../interfaces/areaCommons.interface';
@Injectable({
  providedIn: 'root'
})
export class MapDataService {
  private PATH : string = "./assets/maps/data/";
  private FILE_EXTENSION=".json";
  
  constructor(private http: HttpClient) { }

  getMapMetaData(map_identifier : string): Observable<AreaCommons[]>{
    return this.http.get<AreaCommons[]>(this.PATH+map_identifier+this.FILE_EXTENSION);
  }
}
