import { Component, OnInit } from '@angular/core';
import { GameModeType } from 'src/app/shared/components/maps-games/game_mode_type';
import { MapsTypes } from 'src/app/shared/components/maps/map/maps-types';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  gameModeType : GameModeType = GameModeType.GAME_INPUT;
  mapType : MapsTypes = MapsTypes.MAP_DEPARTEMENTS_FRANCE;
  table : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
