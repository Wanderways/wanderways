import { Component, Input, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { TimerService } from 'src/app/shared/services/utilitary/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 0;
  @Input() upperBound : number = 300;
  
  constructor(private timerService : TimerService) {
    timerService.setUpperBound(this.upperBound);
    timerService.getCurrentValueChange().subscribe((value)=>{
      this.value = value;
      if((this.value/this.upperBound)*100 <= 20){
        this.color = "warn";
      }else if((this.value/this.upperBound)*100 <= 50){
        this.color = "accent";
      }else if(this.color =="warn" && (this.value/this.upperBound)*100 > 50){
        this.color = "primary";
      }
    });
    timerService.startTimer();
  }

  ngOnInit(): void {
  }

}
