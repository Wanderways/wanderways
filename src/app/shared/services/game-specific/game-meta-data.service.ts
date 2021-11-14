import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GameModeMetadata } from './game-mode-meta-data.interface';

@Injectable({
  providedIn: 'root'
})
export class GameModeMetaDataService {

  gameModeMetaData : GameModeMetadata = {
    game_mode_name : "undefined",
    game_mode_rules : "undefined"
  }
  gameModeMetaDataChange : Subject<GameModeMetadata> = new Subject<GameModeMetadata>()

  constructor() { }

  /**
   * Permet de mettre à jour la valeur des métas données
   * @param mapMetadata : Une instance valide du type "GameModeMetadata"
   */
   setGameMetaData(gameModeMetadata : GameModeMetadata){
    this.gameModeMetaDataChange.next(gameModeMetadata);
  }

  /**
   * Permet d'obtenir les métas données de la gamemode
   * @returns 
   */
  getGameModeMetadata(){
    return this.gameModeMetaData;
  }
}
