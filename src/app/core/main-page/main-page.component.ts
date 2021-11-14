import { Component, OnInit } from '@angular/core';
import { GameModeType } from 'src/app/shared/components/maps-games/game_mode_type';
import { MapsType } from 'src/app/shared/components/maps/map/MapsType.enum';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  gameModeType : GameModeType = GameModeType.INPUT_GAME;
  mapType : MapsType = MapsType.DEPARTEMENTS_FRANCAIS;
  table : boolean = false;

  ngOnInit(): void {
  }

}
