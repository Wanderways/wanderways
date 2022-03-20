import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AreaType } from './area-types-loader.interface';

@Injectable({
  providedIn: 'root'
})
export class AreaTypesLoaderService {
  private PATH : string = "./assets/maps/";
  private FILE_NAME : string = "areaTypes";
  private FILE_EXTENSION=".json";

  constructor(private http: HttpClient) { }
  
  /**
   * Allows to load the list of area types
   * @returns The list of existing area types
   */
  loadAreaTypes() : Observable<AreaType[]>{
    return this.http.get<AreaType[]>(this.PATH+this.FILE_NAME+this.FILE_EXTENSION);
  }
}
