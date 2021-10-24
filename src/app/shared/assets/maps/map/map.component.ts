import { Component, Input } from '@angular/core';


import { MapsType } from './MapsType.enum';
import { ActionType } from './ActionType.enum';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  /**
   * L'enum ActionType, pour qu'elle soit accessible dans le template
   */
  ActionType = ActionType;
  /**
   * L'enum MapsType, pour qu'elle soit accessible dans le template
   */
  MapsType = MapsType;

  /**
   * Le type de d'action que l'on souhaite faire. Comme consultation, contre la montre etc..
   */
  @Input() public  action : ActionType = ActionType.InputGame;
  /**
   * La carte que l'on souhaite afficher
   */
  @Input() public  map : MapsType = MapsType.DEPARTEMENTS_FRANCAIS;

  /**
   * Valeur rentrée, pour certains jeux comme les devinettes ou les contre la montre.
   */
  area_input : string = "";

  /**
   * Permet de savoir si une map donnée est celle configurée.
   * @param map : La map donnée.
   * @returns Un boolean, true si c'est la map configurée, false sinon.
   */
  isConfiguredMap(map : MapsType) : boolean{
    return this.map == map;
  }

  /**
   * Permet de savoir si une action donnée est celle configurée.
   * @param action : L'action donnée.
   * @returns Un boolean, true si c'est l'action configurée, false sinon.
   */
  isConfiguredAction(action : ActionType) : boolean{
    return this.action == action;
  }

}
