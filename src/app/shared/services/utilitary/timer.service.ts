import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  interval : NodeJS.Timeout = new NodeJS.Timeout;
  upperBound : number = 0;
  currentValue : number = 0;
  constructor() { }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.currentValue > 0) {
        this.currentValue--;
      } else {
        this.currentValue = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
