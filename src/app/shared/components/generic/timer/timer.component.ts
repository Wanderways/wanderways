import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { Subscription } from 'rxjs';
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

	@Input() currentTimerValue : number = 0;
	@Input() upperBound : number = 90;

	private subscriptions : {[key:string]:Subscription} = {};
  
	ngOnInit(): void {
	}

	/**
	 * Watch if any input value change, and act accordingly
	 * @param changes A change that occured
	 */
	 ngOnChanges(changes: SimpleChanges) {
		if(changes.currentTimerValue)this.processCurrentValueChange(changes.currentTimerValue.currentValue);
	 }

	ngOnDestroy(){
		// Unsubscribe from all registered subscriptions
		Object.keys(this.subscriptions).forEach((key : string) => {
			this.subscriptions[key].unsubscribe();
		});
	}

	/**
	 * Process the currentValue input changes
	 * @param value The current new value
	 */
	processCurrentValueChange(value : number){
		this.readableTime = this.generateReadableTime(value);
		if((this.currentTimerValue/this.upperBound)*100 <= 20){
			this.color = "warn";
		}else if((this.currentTimerValue/this.upperBound)*100 <= 50){
			this.color = "accent";
		}else if(this.color =="warn" && (this.currentTimerValue/this.upperBound)*100 > 50){
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
