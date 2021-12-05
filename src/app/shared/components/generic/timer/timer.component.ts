import { Component, Input, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { TimerService } from 'src/app/shared/services/game-mode-specific/timer.service';

@Component({
	selector: 'app-timer',
	templateUrl: './timer.component.html',
	styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
	color: ThemePalette = 'primary';
	mode: ProgressSpinnerMode = 'determinate';
	readableTime : string = "";
	@Input() upperBound : number = 90;
	value : number = this.upperBound;
  
	constructor(private timerService : TimerService) {
	}

	ngOnInit(): void {
		this.value = this.upperBound;
		// This service setter must be in ngInit for timing issues (waiting for @Input to be loaded)
		this.timerService.setUpperBound(this.upperBound);
		this.timerService.getCurrentValueChange().subscribe((value : number)=>this.processCurrentValueChange(value));
	}

	ngOnDestroy(){
		this.timerService.clear();
	}

	processCurrentValueChange(value : number){
		this.value = value;
		this.readableTime = this.generateReadableTime(value);
		if((this.value/this.upperBound)*100 <= 20){
			this.color = "warn";
		}else if((this.value/this.upperBound)*100 <= 50){
			this.color = "accent";
		}else if(this.color =="warn" && (this.value/this.upperBound)*100 > 50){
			this.color = "primary";
		}
  }
	/**
	 * Allows to obtain a human readable time
	 * @param timeAmount : A number in seconds
	 * @returns The readable value
	 */
	generateReadableTime( timeAmount : number) : string{
		let minutes = ( Math.floor(timeAmount/60 ) < 10 ? "0" : "" )+  Math.floor(timeAmount / 60 );
		let secondes = ( timeAmount%60 < 10 ? "0" : "" ) + timeAmount%60;
		return minutes + ":"+ secondes;
	}

}
