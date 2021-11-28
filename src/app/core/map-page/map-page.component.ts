import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModeType } from 'src/app/shared/utils/types/game-mode.type';
import { MapsType } from 'src/app/shared/utils/types/maps.type';
import { MapSelection } from 'src/app/shared/utils/interfaces/map-selection.interface';
import { GameModeMetaData } from 'src/app/shared/services/game-mode-specific/game-mode-mode-meta-data.interface';
import { MapMetaData } from 'src/app/shared/utils/interfaces/map-meta-data.interface';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  GameModeType = GameModeType;
  MapsType = MapsType;

  displaySelection : boolean = false;
  gameModeType : GameModeType = GameModeType.GAME_INPUT;
  mapType : MapsType = MapsType.MAP_UNDEFINED;
  table : boolean = false;


  displayedColumns: string[] = ['radio','game_mode'];

  selectedGameMode : GameModeMetaData = GameModeType.GAME_LIST[0];
  selectedMap : MapMetaData = MapsType.MAPS_LIST[0];

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {

    // Gets the url parameters
    let routeParams : MapSelection = {
      map : this.route.snapshot.queryParamMap.get('map')||"",
      game : this.route.snapshot.queryParamMap.get('game')||""
    };
    
    // If the values are correct ones, then we process them, else we redirect to choosing page with an error snackbar
    if(MapsType.isValidType(routeParams.map) && GameModeType.isValidType(routeParams.game)){
      this.displaySelection = false;
      // On force l'affectation car la vérification précédente assure que les données sont valides
      this.mapType = MapsType.getTypeFromIdentifier( routeParams.map)!;
      this.gameModeType = GameModeType.getTypeFromIdentifier(routeParams.game)!;
    }else if(this.route.snapshot.queryParamMap.keys.length == 0){
      this.displaySelection = true;
      /**
       * @TODO Implements map choosing
       */
    }else{
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.navigate(['/maps']);
      /**
       * @TODO Implements error snackbar
       */
    }
  }

}
