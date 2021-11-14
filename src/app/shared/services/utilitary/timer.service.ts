import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private interval : any;
  private upperBound : number = 0;
  private currentValue : number = 0;
  private isEnded : boolean = false;

  private currentValueChange : Subject<number> = new Subject<number>();
  constructor() { }

  startTimer() : void {
    if(this.upperBound <=0){
      console.error("Erreur : La valeur max du timer "+(this.upperBound==0?"n'a pas été initialisée.":"est inférieur à zéro.")+" Valeur actuelle : "+this.upperBound);
      
    }
    this.interval = setInterval(() => {
      if(this.currentValue > 0) {
        this.currentValue--;
        this.currentValueChange.next(this.currentValue);
      } else {
        this.currentValue = this.upperBound;
        this.currentValueChange.next(this.currentValue);
      }
    },1000)
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


}
