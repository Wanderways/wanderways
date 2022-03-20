import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MapsTag } from './maps-tags.interface';

@Injectable({
  providedIn: 'root'
})
export class MapsTagsLoaderService {

  private PATH : string = "./assets/maps/";
  private FILE_NAME : string = "maps_tags";
  private FILE_EXTENSION=".json";

  constructor(private http: HttpClient) { }
  
  /**
   * Allows to get the full list of declared tags
   * @returns The full list of declared tags
   */
  loadTags() : Observable<MapsTag[]>{
    return this.http.get<MapsTag[]>(this.PATH+this.FILE_NAME+this.FILE_EXTENSION);
  }
}
