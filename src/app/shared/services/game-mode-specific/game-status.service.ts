import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GameStatus } from '../../utils/enums/GameStatus.enum';

@Injectable({
  providedIn: 'root'
})
export class GameStatusService {

  private currentGameStatus : GameStatus = GameStatus.START;
  private gameStatusChange : Subject<GameStatus> = new Subject<GameStatus>();

  constructor() {
    this.gameStatusChange.next(GameStatus.START);
  }
  
  public getGameStatus(){
    return this.currentGameStatus;
  }

  /**
   * Allows to obtain the subject GameStatus to subcribe to its changes
   * @returns 
   */
  public getGameStatusChange() : Subject<GameStatus>{
    return this.gameStatusChange;
  }

  public setGameStatus(gameStatus : GameStatus){
    this.currentGameStatus = gameStatus;
    this.gameStatusChange.next(gameStatus);
  }

  public clear(){
    this.setGameStatus(GameStatus.START);
  }
}
