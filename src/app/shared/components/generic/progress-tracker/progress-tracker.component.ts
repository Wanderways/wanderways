import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { DataSubjectService } from 'src/app/shared/services/utilitary/data-subject.service';

@Component({
  selector: 'app-progress-tracker',
  templateUrl: './progress-tracker.component.html',
  styleUrls: ['./progress-tracker.component.scss']
})
export class ProgressTrackerComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  readablePercentage : string = "0";
  upperBound : number = 0;
  value : number = this.upperBound;

  constructor(private dataSubjectService : DataSubjectService) {}

  ngOnInit(): void {
    this.dataSubjectService.getSourceDataChange().subscribe((value)=>{this.upperBound = value.length;});
    this.dataSubjectService.getFinalDataChange().subscribe((value)=>{
      this.value = value.length;
      let temporaryPercentage = ((this.value/this.upperBound)*100);
      this.readablePercentage = temporaryPercentage.toFixed(2);
      
      if(temporaryPercentage <= 20){
        this.color = "warn";
      }else if(temporaryPercentage <= 50){
        this.color = "accent";
      }else if(this.color =="warn" && temporaryPercentage > 50){
        this.color = "primary";
      }
  });
  }
}
