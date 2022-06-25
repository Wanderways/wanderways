import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MapIndexEntry } from 'src/app/shared/maps/services/map-index-loader/interfaces/map-index-entry.interface';

@Component({
  selector: 'app-map-tile[mapEntry]',
  templateUrl: './map-tile.component.html',
  styleUrls: ['./map-tile.component.scss']
})
export class MapTileComponent implements OnInit {
  @HostBinding("class.not-available") notAvaiableClass : boolean =false;
  @Input("mapEntry") mapEntry! : MapIndexEntry;
  @Input("available") available : boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.notAvaiableClass = !this.available;
  }

}
