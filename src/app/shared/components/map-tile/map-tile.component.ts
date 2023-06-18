import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MapGroup } from '../../interfaces/map-group.interface';
import { ImgLoaderComponent } from '../img-loader/img-loader.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone:true,
  imports:[
    ImgLoaderComponent,
    RouterModule
  ],
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
