import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/app/shared/services/handlers/generic-error.handler';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MapService {
  constructor(private httpClient: HttpClient) { }

  getMaps$(): Observable<Map[]> {
    return this.httpClient.get<Map[]>(`${environment.api_url}/map/list`).pipe(catchError(handleError))
  }
}

export interface Map {
  id: string,
  label: string,
  tags: string[],
  description: string,
  url_wiki: string,
  play_count: number
}
