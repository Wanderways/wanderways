import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GameStatusService } from 'src/app/shared/services/game-mode-specific/game-status.service';
import { GameStatus } from 'src/app/shared/utils/enums/GameStatus.enum';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private interval : any;
  private upperBound : number = 0;
  private currentValue : number = 0;
  private isEnded : boolean = false;

  private currentValueChange : Subject<number> = new Subject<number>();
  constructor( private gameStatusService : GameStatusService ) {
    this.gameStatusService.getGameStatusChange().subscribe((value)=>{
      switch(value){
        case GameStatus.PAUSE :
          this.pauseTimer();
          break;
        case GameStatus.START :
          this.pauseTimer();
          this.resetTimer();
          break;
        case GameStatus.PLAYING :          
          this.startTimer();
          break;
      }
    });
  }

  startTimer() : void {
    if(this.upperBound <=0){
      console.error("Erreur : La valeur max du timer "+(this.upperBound==0?"n'a pas été initialisée.":"est inférieur à zéro.")+" Valeur actuelle : "+this.upperBound);
    }
    
    this.interval = setInterval(() => {
      if(this.currentValue > 0) {
        this.updateValue(this.currentValue-1);
      } else {
        this.resetTimer();
      }
    },1000)
  }
  
  resetTimer(){
    this.updateValue(this.upperBound);
  }
  

  pauseTimer() : void{
    clearInterval(this.interval);
  }

  getUpperBound (): number{
    return this.upperBound;
  }

  getCurrentValueChange() : Subject<number>{
    return this.currentValueChange;
  }

  setUpperBound(upperBound : number) : void{
    this.upperBound = upperBound;
  }

  /**
   * Allows to update the value of the timer
   * @param value The new value to be set
   */
   private updateValue(value : number){
    this.currentValue = value;
    this.currentValueChange.next(value);
  }



}
