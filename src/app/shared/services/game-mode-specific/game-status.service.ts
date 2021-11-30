import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GameStatus } from '../../utils/enums/GameStatus.enum';
import { GameModeType } from '../../utils/types/game-mode.type';
import { GameModeMetaDataService } from './game-mode-meta-data.service';
import { GameModeMetaData } from '../../utils/interfaces/game-oriented/game-mode-meta-data.interface';

@Injectable({
  providedIn: 'root'
})
export class GameStatusService {

  private gameStatusChange : Subject<GameStatus> = new Subject<GameStatus>();

  constructor() {
    this.gameStatusChange.next(GameStatus.START);
  }
  
  /**
   * Allows to obtain the subject GameStatus to subcribe to its changes
   * @returns 
   */
  public getGameStatusChange() : Subject<GameStatus>{
    return this.gameStatusChange;
  }

  public setGameStatus(gameStatus : GameStatus){
    this.gameStatusChange.next(gameStatus);
  }

  public clear(){
    this.setGameStatus(GameStatus.START);
  }
}
