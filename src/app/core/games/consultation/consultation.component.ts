import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModeMetaData } from 'src/app/shared/utils/interfaces/game-oriented/game-mode-meta-data.interface';
import { Area } from 'src/app/shared/utils/interfaces/map-oriented/area';
import { MapMetaData } from 'src/app/shared/utils/interfaces/map-oriented/map-meta-data.interface';
import { GameModeType } from 'src/app/shared/utils/types/game-mode.type';
import { MapsType } from 'src/app/shared/utils/types/maps.type';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent {
    // Atttributes used in Input
	public mapMetaData : MapMetaData = MapsType.MAPS_LIST[0];
	public gameModeMetadata : GameModeMetaData =  GameModeType.GAME_CONSULT;
	public currentData : Area | undefined = undefined;

	constructor(protected route: ActivatedRoute,
		protected router: Router) {
			this.processUrlParameter();
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
