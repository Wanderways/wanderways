import { Component, OnInit } from '@angular/core';
import { MapsType } from 'src/app/shared/components/maps/map/MapsType.enum';
import { ActionType } from 'src/app/shared/components/maps/map/ActionType.enum';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  actionType : ActionType = ActionType.InputGame;
  mapType : MapsType = MapsType.DEPARTEMENTS_FRANCAIS;
  table : boolean = false;

  ngOnInit(): void {
  }

}