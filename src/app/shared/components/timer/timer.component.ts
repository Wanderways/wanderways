import { Component, Input, OnInit, Output } from '@angular/core';
import { AdjustingInterval } from '../../utils/AdjustingInterval';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input('timerDuration') timerDuration: number = 300;
  @Output('onCurrentValueChanges') currentValue: number = 0
  currentReadableValue: string = "";
  currentValueAsPercentage = 50;
  RAYON=90;
  CIRCUMFERENCE = Math.PI * 2 * this.RAYON;
  currentStage: string = "";
  stages = [{ percentage: 30, color: "red" }, { percentage: 60, color: "orange" }, { percentage: 100, color: "var(--map-land-found)" }];
  /**
   * Timer var
   */
  ticker: AdjustingInterval | undefined;
  interval = 1000; // ms
  expected = Date.now() + this.interval;

  constructor() { }

  ngOnInit(): void {
    this.resetTimer();
    this.startTimer();
    this.currentValue = this.timerDuration;
    this.currentReadableValue = this.toFormat(this.timerDuration);
  }

  /**
   * Starts the timer
   */
  startTimer() {
    this.ticker?.start();
  }

  /**
   * Stops the timer
   */
  stopTimer() {
    this.ticker?.stop();
  }

  /**
   * Reset the timer
   */
  resetTimer() {
    this.ticker = new AdjustingInterval(() => {
      this.currentValue--;
      this.currentReadableValue = this.toFormat(this.currentValue);
      this.currentStage = this.stages.find(e => e.percentage >= this.getAsPercentage())!.color;
      if (this.currentValue === 0) {
        this.stopTimer();
      }
    },
      1000,
      () => {
        console.warn('The drift exceeded the interval.');
      });
  }

  /**
   * Return a time in a mm:ss format
   * @param seconds 
   * @returns 
   */
  toFormat(seconds: number): string {
    return new Date(seconds * 1000).toISOString().substr(14, 5);
  }

  /**
   * Returns the elapsed time in percentage
   * @returns The elapsed time in percentage
   */
  getAsPercentage() {
    if (this.timerDuration === 0) return 100;
    return (this.currentValue / this.timerDuration) * 100;
  }
}