import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { DataSubjectService } from 'src/app/shared/services/map-specific/data-subject.service';

@Component({
	selector: 'app-progress-tracker',
	templateUrl: './progress-tracker.component.html',
	styleUrls: ['./progress-tracker.component.scss']
})
export class ProgressTrackerComponent implements OnInit {

	color: ThemePalette = 'primary';
	mode: ProgressSpinnerMode = 'determinate';
	currentPercentage : number = 0;
	readablePercentage : string = "0";
	upperBound : number = 0;
	currentValue : number = 0;

	constructor(private dataSubjectService : DataSubjectService) {}
	ngOnInit(): void {
		this.dataSubjectService.getSourceDataChange().subscribe(()=> this.upperBound = this.dataSubjectService.getSourceDataLength())
		this.dataSubjectService.getFinalDataChange().subscribe((value : any[])=>this.processFinalDataChange(value));
	}

  	/**
	 * Clear the component used static data
	 */
	 ngOnDestroy(){
		this.dataSubjectService.clear();
	}

	processFinalDataChange( value : any[] ){
		this.currentValue = value.length;
		if( this.upperBound > 0 )
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
