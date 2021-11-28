import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameModeType } from 'src/app/shared/utils/types/game-mode.type';
import { MapsType } from 'src/app/shared/utils/types/maps.type';
import { MapSelection } from 'src/app/shared/utils/interfaces/map-selection.interface';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  gameModeType : GameModeType = GameModeType.GAME_INPUT;
  mapType : MapsType = MapsType.MAP_DEPARTEMENTS_FRANCE;
  table : boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Gets the url parameters
    let routeParams : MapSelection = {
      map : this.route.snapshot.queryParamMap.get('map')||"",
      game : this.route.snapshot.queryParamMap.get('game')||""
    };
    
    // If the values are correct ones, then we process them, else we redirect to choosing page with an error snackbar
    if(MapsType.isValidType(routeParams.map) && GameModeType.isValidType(routeParams.game)){
      /**
       * @TODO Implements sucess
       */
    }else{
      /**
       * @TODO Implements fail
       */
    }
  }

}
