import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GameStatus } from '../../utils/enums/GameStatus.enum';

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
}
