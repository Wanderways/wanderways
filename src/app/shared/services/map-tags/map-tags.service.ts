import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../../interfaces/tag.interface';

@Injectable({
  providedIn: 'root'
})
export class MapTagsService {

  private PATH : string = "./assets/maps/";
  private FILE_NAME : string = "maps_tags";
  private FILE_EXTENSION=".json";

  constructor(private http: HttpClient) { }
  
  /**
   * Allows to get the full list of declared tags
   * @returns The full list of declared tags
   */
  loadTags() : Observable<Tag[]>{
    return this.http.get<Tag[]>(this.PATH+this.FILE_NAME+this.FILE_EXTENSION);
  }
}
