import { Component, OnInit } from '@angular/core';
import { GameModeType } from 'src/app/shared/utils/types/game-mode.type';
import { MapsType } from 'src/app/shared/utils/types/maps.type';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  GameModeType = GameModeType;
  MapsType = MapsType;
  
  constructor() { }

  ngOnInit(): void {
  }

}
