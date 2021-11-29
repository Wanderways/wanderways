import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModeType } from 'src/app/shared/utils/types/game-mode.type';
import { MapsType } from 'src/app/shared/utils/types/maps.type';
import { GameModeMetaData } from 'src/app/shared/utils/interfaces/game-mode-meta-data.interface';
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


  displayedColumns: string[] = ['radio','visual','choice', 'description'];

  selectedGameMode : GameModeMetaData = GameModeType.GAME_LIST[0];
  selectedMap : MapMetaData = MapsType.MAPS_LIST[0];

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {

    // Gets the url parameters
    let map : string = this.route.snapshot.queryParamMap.get('map')||"";
    let game : string = this.route.snapshot.queryParamMap.get('game')||"";
    
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.displaySelection = !(MapsType.isValidType(map) && GameModeType.isValidType(game));

    // If the values are correct ones, then we process them, else we redirect to choosing page with an error snackbar
    if(!this.displaySelection){
      this.displaySelection = false;
      // On force l'affectation car la vérification précédente assure que les données sont valides
      this.mapType = MapsType.getTypeFromIdentifier(map)!;
      this.gameModeType = GameModeType.getTypeFromIdentifier(game)!;
    }else{
      this.displaySelection = true;
      this.router.navigate(['/maps']);
      /**
       * @TODO Implements map choosing
       */
    }

    // If there where args and the maps/game mode has been disaproved, then we show error
    if(this.route.snapshot.queryParamMap.keys.length != 0 && this.displaySelection){
      /**
       * @TODO Implements error snackbar
       */
    }
  }

}
