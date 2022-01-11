import { Component, Input, SimpleChanges } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
	selector: 'app-progress-tracker',
	templateUrl: './progress-tracker.component.html',
	styleUrls: ['./progress-tracker.component.scss']
})
export class ProgressTrackerComponent  {

	color: ThemePalette = 'primary';
	currentPercentage : number = 0;
	readablePercentage : string = "0";
	
	@Input() upperBound : number = 0;
	@Input() currentValue : number = 0

	constructor() {}

	/**
     * Detects input attributes changes and start appropriate attributes onchange function
     * @param changes A change in attributes
     */
	ngOnChanges(changes: SimpleChanges){
		if(changes.currentValue)this.processFinalDataChange();
	}

	/**
	 * If the upperbound has been set, then process the current amount of data in final data list
	 */
	processFinalDataChange() : void{
		if( this.upperBound <= 0 ) return; // Don't go further if not necessary
		this.currentPercentage = ((this.currentValue/this.upperBound)*100)
		this.readablePercentage = this.currentPercentage.toFixed(2);
		if(this.currentPercentage <= 20){
			this.color = "warn";
		}else if(this.currentPercentage <= 50){
			this.color = "accent";
		}else if(this.color =="warn" && this.currentPercentage > 50){
			this.color = "primary";
		}
	}

}
