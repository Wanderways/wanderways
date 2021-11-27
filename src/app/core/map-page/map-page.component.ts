import { Component, OnInit } from '@angular/core';
import { GameModeType } from 'src/app/shared/utils/types/game-mode.type';
import { MapsType } from 'src/app/shared/utils/types/maps.type';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  gameModeType : GameModeType = GameModeType.GAME_INPUT;
  mapType : MapsType = MapsType.MAP_DEPARTEMENTS_FRANCE;
  table : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
