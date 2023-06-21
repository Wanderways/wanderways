import { Component, OnInit } from '@angular/core';
import { Map, MapService } from '../maps-page/services/map.service';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mapList$: Observable<Map[]> = this.mapService.getMaps$().pipe(map(e => e.slice(5, 10)), shareReplay());

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
  }

}
