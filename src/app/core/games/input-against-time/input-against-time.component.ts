import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameStatus } from 'src/app/shared/utils/enums/GameStatus.enum';
import { GameModeMetaData } from 'src/app/shared/utils/interfaces/game-oriented/game-mode-meta-data.interface';
import { Area } from 'src/app/shared/utils/interfaces/map-oriented/area';
import { MapMetaData } from 'src/app/shared/utils/interfaces/map-oriented/map-meta-data.interface';
import { GameModeType } from 'src/app/shared/utils/types/game-mode.type';
import { MapsType } from 'src/app/shared/utils/types/maps.type';

@Component({
  selector: 'app-input-against-time',
  templateUrl: './input-against-time.component.html',
  styleUrls: ['./input-against-time.component.scss']
})
export class InputAgainstTimeComponent {

  // Object made available to template
  public GameStatus = GameStatus;
  // Atttributes used in Input
  public mapMetaData : MapMetaData = MapsType.MAPS_LIST[0];
	public gameModeMetadata : GameModeMetaData =  GameModeType.GAME_INPUT;
  // Attributes in a two way binding
  public gameStatus : GameStatus = GameStatus.START;
  // Data storage for scenes transition
  private finalData : Area[] = [];
  private currentData : Area | undefined = undefined;

  constructor(protected route: ActivatedRoute,
              protected router: Router) {
    this.processUrlParameter();
  }


  /**
   * Check if the given GameStatus is the current one
   * @param gamestatus The GameStatus to check
   * @returns True if the given GameStatus is equal to the current one
   */
  checkCurrentGameStatus(gameStatus: GameStatus): boolean {    
		return this.gameStatus == gameStatus;
  }
  /**
   * Handles the start button and allows to change screen
   */
  startEventHandler(){
    this.setGameStatus(GameStatus.PLAYING);
  }

  setGameStatus(gameStatus : GameStatus){
    this.gameStatus = gameStatus;
  }

  setFinalData(areas : Area[]){
    this.finalData = areas;
  }

  /**
	 * Get the url parameters to act appropriatly
	 */
	private processUrlParameter(){
		// Gets the url parameters
		let map : string = this.route.snapshot.queryParamMap.get('map')||"";
		// Defines that the page sould reload, not use cache (for flow control reasons)	
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;

		// If the values are correct ones, then we process them, else we redirect to choosing page with an error snackbar
		if(MapsType.isValidType(map)){
			// On force l'affectation car la vérification précédente assure que les données sont valides
			this.mapMetaData = MapsType.getTypeFromIdentifier(map)!;
		}else{
			this.router.navigate(['/maps']);
		}

		// If there where args and the maps/game mode has been disaproved, then we show error
		if(this.route.snapshot.queryParamMap.keys.length != 0 && MapsType.isValidType(map)){
		/**
		 * @TODO Implements error snackbar
		 */
		}
	}
}
