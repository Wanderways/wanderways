import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ImgLoaderComponent } from '../img-loader/img-loader.component';
import { RouterModule } from '@angular/router';
import { Map } from 'src/app/core/maps-page/services/map.service';

@Component({
  standalone: true,
  imports: [
    ImgLoaderComponent,
    RouterModule
  ],
  selector: 'article[app-map-tile][map]',
  templateUrl: './map-tile.component.html',
  styleUrls: ['./map-tile.component.scss']
})
export class MapTileComponent {
  @HostBinding("style.backgroundColor") backgroundColor: string = `hsl(0%, 100%, 50%)`;
  protected map?: Map
  @Input("map") set setMap(map: Map){
    this.map = map;
    this.backgroundColor = `hsl(${this.currentHue}, 75%, 50%)`;
  };
  constructor() { }

  get currentHue(): number {
    if (!this.map?.id) return 0;
    const ascii_sum = [...this.map.id].map(e => e.charCodeAt(0)).reduce((sum, value) => sum += value);
    return ascii_sum ^ ascii_sum % 360; // trying to make it somewhat determinist but avoid same color
  }
}
