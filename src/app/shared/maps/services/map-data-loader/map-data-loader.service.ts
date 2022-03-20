import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iso3166_1 } from './interfaces/iso3166_1.interface';
import { iso3166_2_first_level } from './interfaces/iso3166_2_first_level.interface';
import { iso3166_2_second_level } from './interfaces/iso3166_2_second_level.interface';

@Injectable({
  providedIn: 'root'
})
export class MapDataLoaderService {
  private PATH : string = "./assets/maps/data/";
  private FILE_EXTENSION=".json";
  
  constructor(private http: HttpClient) { }

  getMapMetaData(map_identifier : string): Observable<iso3166_1[] | iso3166_2_first_level[] | iso3166_2_second_level>{
    return this.http.get<iso3166_1[] | iso3166_2_first_level[] | iso3166_2_second_level>(this.PATH+map_identifier+this.FILE_EXTENSION);
  }
}
