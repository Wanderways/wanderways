import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar[currentFound][objective]',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  @Input("currentFound") currentFound: number = 0;
  @Input("objective") objective: number = 0;
  currentStage: string = "";
  stages = [
    {
      percentage: 30,
      class: "low"
    },
    {
      percentage: 60,
      class: "medium"
    },
    {
      percentage: 100,
      class: "found"
    }
  ]

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currentFound) this.onCurrentFoundChange();
  }

  onCurrentFoundChange() {
    this.setCurrentStage();
  }

  setCurrentStage() {
    this.currentStage = this.stages.find(e => e.percentage >= this.getAsPercentage())!.class;
  }

  getAsPercentage(): number {
    return (this.currentFound / this.objective) * 100;
  }
}