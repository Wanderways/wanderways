import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MapGroup } from '../../maps/services/map-group/interfaces/map-group.interface';

@Component({
  selector: 'app-map-tile[mapGroup]',
  templateUrl: './map-tile.component.html',
  styleUrls: ['./map-tile.component.scss']
})
export class MapTileComponent implements OnInit {
  @HostBinding("class.not-available") notAvaiableClass : boolean =false;
  @Input("mapGroup") mapGroup! : MapGroup;
  @Input("available") available : boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.notAvaiableClass = !this.available;
  }

}
