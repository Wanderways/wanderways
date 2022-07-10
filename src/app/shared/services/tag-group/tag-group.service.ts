import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TagGroup } from '../../interfaces/tag-group.interface';

@Injectable({
  providedIn: 'root'
})
export class TagGroupService {
  private PATH : string = "./assets/maps/";
  private FILE_NAME : string = "tag_group";
  private FILE_EXTENSION=".json";

  constructor(private http: HttpClient) { }
  
  /**
   * Allows to load the list of area types
   * @returns The list of existing area types
   */
  loadTagGroup() : Observable<TagGroup[]>{
    return this.http.get<TagGroup[]>(this.PATH+this.FILE_NAME+this.FILE_EXTENSION);
  }
}
