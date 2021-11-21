import { Component, OnInit } from '@angular/core';
import { GameModeType } from 'src/app/shared/components/maps-games/game_mode_type';
import { MapsTypes } from 'src/app/shared/components/maps/map/maps-types';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  gameModeType : GameModeType = GameModeType.GAME_INPUT;
  mapType : MapsTypes = MapsTypes.MAP_DEPARTEMENTS_FRANCE;
  table : boolean = false;

  ngOnInit(): void {
  }

}
